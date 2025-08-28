import uuid
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ("admin", "Admin"),
        ("dop", "Director of Photography"),
        ("gaffer", "Gaffer"),
        ("first_ac", "1st AC"),
        ("grip", "Grip"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default="admin")

    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"


class CameraSetup(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    description = models.TextField()
    recommended_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="camera_setups")

    def __str__(self):
        return self.name


class LightingSetup(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    description = models.TextField()
    recommended_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="lighting_setups")

    def __str__(self):
        return self.name
