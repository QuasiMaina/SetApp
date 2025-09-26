from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid


class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    ROLE_CHOICES = [
        ("dop", "Director of Photography"),
        ("gaffer", "Gaffer"),
        ("first_ac", "First AC"),
        ("grip", "Grip"),
        ("admin", "Admin"),
    ]

    role = models.CharField(
        max_length=50,
        choices=ROLE_CHOICES,
        default="grip",   # ✅ give a safe default (or "dop" / "viewer" if you prefer)
    )

    def __str__(self):
        return f"{self.username} ({self.role})" if self.role else self.username


class Setup(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="setups")
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.CharField(
        max_length=50,
        choices=[
            ("camera", "Camera"),
            ("lighting", "Lighting"),
            ("grip", "Grip"),
            ("first_ac", "First AC"),
        ],
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.user.username})"
