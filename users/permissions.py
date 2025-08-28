from rest_framework import permissions

class IsOwnerOrAdmin(permissions.BasePermission):
    """
    Custom permission to allow only owners of an object or admins to edit/delete it.
    """
    def has_object_permission(self, request, view, obj):
        return obj == request.user or request.user.is_staff
