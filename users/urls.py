from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    RegisterView,
    UserListView,
    UserProfileView,
    LogoutView,
    ChangePasswordView,
    SetupListCreateView,
    SetupDetailView,
)

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", TokenObtainPairView.as_view(), name="login"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("profile/", UserProfileView.as_view(), name="user-profile"),
    path("list/", UserListView.as_view(), name="user-list"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("change-password/", ChangePasswordView.as_view(), name="change-password"),

    # Setup endpoints
    path("setups/", SetupListCreateView.as_view(), name="setup-list-create"),
    path("setups/<uuid:pk>/", SetupDetailView.as_view(), name="setup-detail"),
]
