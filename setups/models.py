import uuid
from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Setup(models.Model):
    """
    Represents a setup (camera, lighting, or grip) created by crew members 
    like DOPs, 1st ACs, gaffers, and grips.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    SETUP_TYPES = [
        ('camera', 'Camera'),
        ('lighting', 'Lighting'),
        ('grip', 'Grip'),
    ]

    DEPARTMENTS = [
        ('dop', 'Director of Photography'),
        ('first_ac', '1st AC'),
        ('gaffer', 'Gaffer'),
        ('grip', 'Grip'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    setup_type = models.CharField(
        max_length=50, 
        choices=SETUP_TYPES, 
        default='camera'
    )
    department = models.CharField(
        max_length=50, 
        choices=DEPARTMENTS, 
        default='dop'
    )
    created_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="setups_created"   # ✅ renamed for clarity
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  # ✅ added to track edits

    class Meta:
        ordering = ["-created_at"]  # ✅ newest setups first
        verbose_name = "Setup"
        verbose_name_plural = "Setups"

    def __str__(self):
        return f"{self.title} ({self.get_setup_type_display()})"
