from rest_framework_dataclasses.serializers import DataclassSerializer
import asyncio
from core.models.user import User, UserSelfSerializer
from typing import Literal, Optional, List, Dict
from datetime import datetime
from django.contrib.auth import logout
from drf_spectacular.utils import extend_schema
from dataclasses import dataclass
from django.middleware.csrf import get_token
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes, throttle_classes
from rest_framework.throttling import UserRateThrottle, AnonRateThrottle
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from django.contrib.auth import authenticate, login
from core import tools
from core.api.user import UpdateUserViewset


@dataclass
class LoginInfo:
    username: str
    password: str


class LoginInfoSerializer(DataclassSerializer):
    class Meta:
        dataclass = LoginInfo



@extend_schema(
    request=LoginInfoSerializer,
    responses={200: UserSelfSerializer}
)
@throttle_classes([AnonRateThrottle])
@api_view(['POST'])
def login_user(request):
    serializer = LoginInfoSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    data = serializer.save()
    
    user = authenticate(username=data.username, password=data.password)

    if user is None:
        return Response({
            'non_field_errors': ['Invalid username or password. Please try again.']
        }, status=status.HTTP_400_BAD_REQUEST)

    login(request, user)

    return Response(UserSelfSerializer(user).data ,status=status.HTTP_200_OK)

class AugmentedBotUserSerializer(UserSelfSerializer):
    csrftoken: str = "csrftoken"
    sessionid: str = "sessionid"

    class Meta:
        model = User
        fields = UserSelfSerializer.Meta.fields
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['csrftoken'] = self.context['csrftoken']
        representation['sessionid'] = self.context['sessionid']
        return representation

@extend_schema(
    request=LoginInfoSerializer,
    responses={200: AugmentedBotUserSerializer}
)
@throttle_classes([AnonRateThrottle])
@api_view(['POST'])
def bot_login(request):
    serializer = LoginInfoSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    data = serializer.save()
    
    user = authenticate(username=data.username, password=data.password)
    # TODO: raise error if user is not a bot

    if user is None:
        return Response({
            'non_field_errors': ['Invalid username or password. Please try again.']
        }, status=status.HTTP_400_BAD_REQUEST)

    login(request, user)

    return Response(AugmentedBotUserSerializer(user, context={
        "sessionid": request.session.session_key,
        "csrftoken": get_token(request)
    }).data ,status=status.HTTP_200_OK)


@permission_classes([IsAuthenticated])
@api_view(['GET'])
def logout_user(request):    
    logout(request)
    return Response(status=status.HTTP_200_OK)
