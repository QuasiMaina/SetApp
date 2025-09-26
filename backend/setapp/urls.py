from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),

    # ✅ API endpoints
    path("api/", include("setups.urls")),   # All setup endpoints (list, detail, CRUD)

    # ✅ authentication/user management endpoints
    path("api/users/", include("users.urls")),
]
