import uuid
from django.db import models
from django.contrib.auth.models import User

class CameraSetup(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    items = models.JSONField(default=list)  # e.g. ["Camera body", "Lens"]
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class LightingSetup(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    equipment = models.JSONField(default=list)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class GripSetup(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    equipment = models.JSONField(default=list)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class FirstACSetup(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    tools = models.JSONField(default=list)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Scenario(models.Model):
    SCENE_TYPES = [
        ("day_exterior", "Day Exterior"),
        ("night_interior", "Night Interior"),
        ("commercial", "Commercial"),
        ("documentary", "Documentary"),
        ("drama", "Drama"),
        ("action", "Action"),
        ("comedy", "Comedy"),
        ("emotional", "Emotional"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200)
    description = models.TextField()
    scene_type = models.CharField(max_length=50, choices=SCENE_TYPES)

    # Recommended setups (optional foreign keys)
    recommended_camera = models.ForeignKey(CameraSetup, null=True, blank=True, on_delete=models.SET_NULL)
    recommended_lighting = models.ForeignKey(LightingSetup, null=True, blank=True, on_delete=models.SET_NULL)
    recommended_grip = models.ForeignKey(GripSetup, null=True, blank=True, on_delete=models.SET_NULL)
    recommended_firstac = models.ForeignKey(FirstACSetup, null=True, blank=True, on_delete=models.SET_NULL)

    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class AboutContent(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    content = models.TextField()
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "About Page Content"
