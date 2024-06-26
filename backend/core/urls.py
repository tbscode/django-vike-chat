from django.urls import path, include, re_path
from core.api import profile, register, login, user

profile_api_user = profile.UpdateProfileViewset.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
})


user_api_user = user.UpdateUserViewset.as_view({
    'get': 'retrieve',
})

public_profiles_list = profile.PublicProfilesViewset.as_view({
    'get': 'list',
})

public_profiles_get = profile.PublicProfilesViewset.as_view({
    'get': 'get_by_uuid',
})

reveal_profile_get = profile.PublicProfilesViewset.as_view({
    'get': 'reveal_profile',
})

public_profiles_create_chat = profile.PublicProfilesViewset.as_view({
    'post': 'create_chat',
})


urlpatterns = [
    path("api/bot/register", register.register_bot),
    path("api/bot/login", login.bot_login),

    path("api/public/profiles", public_profiles_list),

    path("api/profile/reveal/", reveal_profile_get),
    path("api/profile/<str:user_uuid>/", public_profiles_get),
    path("api/profile/<str:user_uuid>/create_chat", public_profiles_create_chat),
    path("api/profile/self", profile_api_user),

    path("api/user/self", user_api_user),
    path("api/user/register", register.register_user),
    path("api/user/logout", login.logout_user),
    path("api/user/login", login.login_user),
]
