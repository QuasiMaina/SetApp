from django.contrib import admin
from .models import Setup

@admin.register(Setup)
class SetupAdmin(admin.ModelAdmin):
    list_display = ("title", "setup_type", "department", "created_by", "created_at")
    list_filter = ("setup_type", "department", "created_at")
    search_fields = ("title", "description", "created_by__username")
    ordering = ("-created_at",)
