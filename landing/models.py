import uuid
from django.db import models

class LandingPage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255, default="Welcome to SetApp")
    subtitle = models.TextField(blank=True)
    hero_image = models.URLField(blank=True, help_text="Optional hero image URL")
    cta_text = models.CharField(max_length=120, blank=True, help_text="Button label")
    cta_link = models.CharField(max_length=255, blank=True, help_text="Where CTA button points")
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    def __str__(self):
        return self.title
