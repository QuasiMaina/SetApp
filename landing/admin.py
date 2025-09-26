from django.contrib import admin
from .models import LandingPage

@admin.register(LandingPage)
class LandingAdmin(admin.ModelAdmin):
    list_display = ("title", "updated_at")
