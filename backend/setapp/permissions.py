from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsOwnerOrReadOnly(BasePermission):
    """
    Object-level permission: only owners can edit their objects.
    Read-only for everyone else.
    """
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return getattr(obj, "owner_id", None) == getattr(request.user, "id", None)


class IsAdminOrReadOnly(BasePermission):
    """
    View-level permission: only admins can edit, 
    but anyone can read (GET, HEAD, OPTIONS).
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user and request.user.is_staff
