# core/permissions.py
from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Object-level permission to only allow owners of an object to edit/delete it.
    Read-only allowed for everyone.
    Expects model to have `created_by` attribute.
    """
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return getattr(obj, "created_by", None) == request.user

class IsContributorOrReadOnly(permissions.BasePermission):
    """
    Allow editing if user.role is one of contributor roles OR if staff.
    """
    contributor_roles = {"dop", "gaffer", "first_ac", "grip", "admin"}

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        user = request.user
        if not user or not user.is_authenticated:
            return False
        if getattr(user, "is_staff", False) or getattr(user, "is_superuser", False):
            return True
        role = getattr(user, "role", None)
        return role in self.contributor_roles
