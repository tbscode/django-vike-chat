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

profile_api_admin = profile.UpdateProfileViewset.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
})

profile_api_admin_list = profile.UpdateProfileViewset.as_view({
    'get': 'list',
})

public_profiles_list = profile.PublicProfilesViewset.as_view({
    'get': 'list',
})

public_profiles_get = profile.PublicProfilesViewset.as_view({
    'get': 'get_by_uuid',
})

public_profiles_create_chat = profile.PublicProfilesViewset.as_view({
    'post': 'create_chat',
})


urlpatterns = [
    path("api/register", register.register_user),
    path("api/logout", login.logout_user),
    path("api/login", login.login_user),
    path("api/bot_register", register.register_bot),
    path("api/bot_login", login.bot_login),
    path("api/public_profiles", public_profiles_list),
    path("api/profile/<str:user_uuid>/", public_profiles_get),
    path("api/profile/<str:user_uuid>/create_chat", public_profiles_create_chat),
    path("api/profile", profile_api_user),
    path("api/user", user_api_user),
    # Admin
    path("api/profiles/", profile_api_admin_list),
    path("api/profiles/<str:pk>/", profile_api_admin),
]
