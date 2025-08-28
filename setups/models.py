import uuid
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Setup(models.Model):
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
    setup_type = models.CharField(max_length=50, choices=SETUP_TYPES, default='camera')
    department = models.CharField(max_length=50, choices=DEPARTMENTS, default='dop')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="setups")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
