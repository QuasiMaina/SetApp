from django.contrib import admin
from .models import Setups, Tag

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)

@admin.register(Setups)
class SetupAdmin(admin.ModelAdmin):
    list_display = ("title", "scene_type", "mood", "budget_level", "owner", "created_at")
    list_filter = ("scene_type", "mood", "budget_level", "created_at")
    search_fields = ("title", "camera", "lens", "description", "lights", "modifiers")
    autocomplete_fields = ("tags",)
