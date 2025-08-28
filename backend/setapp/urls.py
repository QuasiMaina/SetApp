from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # Admin
    path("admin/", admin.site.urls),

    # Users app
    path("api/users/", include("users.urls")),

    # Setups app
    path("api/", include("setups.urls")),

    # Browsable API login/logout
    path("api/auth/", include("rest_framework.urls")),

    # JWT auth
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # Setups app
    path("api/setups/", include("setups.urls")),
    path("admin/", admin.site.urls),
]

# Serve media & static in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
