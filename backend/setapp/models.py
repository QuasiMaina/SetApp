import uuid
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Tag(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=40, unique=True)

    def __str__(self):
        return self.name


class Setup(models.Model):
    class SceneType(models.TextChoices):
        INTERVIEW = "interview", "Interview"
        INT_NIGHT = "int_night", "Interior Night"
        EXT_DAY = "ext_day", "Exterior Day"
        CAR_CHASE = "car_chase", "Car Chase"
        MUSIC_VIDEO = "music_video", "Music Video"
        DOCU_RUN = "docu_run", "Docu Run & Gun"

    class Mood(models.TextChoices):
        NATURAL = "natural", "Natural"
        MOODY = "moody", "Moody"
        HIGH_KEY = "high_key", "High Key"
        DRAMATIC = "dramatic", "Dramatic"
        WARM = "warm", "Warm"
        COOL = "cool", "Cool"

    class Budget(models.TextChoices):
        LOW = "low", "Low"
        MEDIUM = "medium", "Medium"
        HIGH = "high", "High"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="setups")

    title = models.CharField(max_length=120)
    scene_type = models.CharField(max_length=32, choices=SceneType.choices)
    description = models.TextField()

    # Camera dept
    camera = models.CharField(max_length=120, help_text="Camera used, e.g., ARRI Alexa Mini, BMPCC 6K")
    lens = models.CharField(max_length=120, help_text="Lens used, e.g., Sigma 18-35, Cooke S4 32mm")
    focal_length_mm = models.PositiveIntegerField(null=True, blank=True)
    frame_rate = models.CharField(max_length=40, blank=True, help_text="e.g., 24fps, 50fps")
    shutter = models.CharField(max_length=40, blank=True, help_text="e.g., 180°, 1/50")
    iso = models.CharField(max_length=40, blank=True)
    white_balance = models.CharField(max_length=40, blank=True)

    # Lighting dept
    lights = models.TextField(help_text="List lights used (one per line or CSV)")
    modifiers = models.TextField(blank=True, help_text="Diffusion, flags, grids, etc.")
    environment = models.CharField(max_length=80, help_text="e.g., Overcast, Studio, Daylight")
    mood = models.CharField(max_length=32, choices=Mood.choices)
    budget_level = models.CharField(max_length=16, choices=Budget.choices)

    tags = models.ManyToManyField(Tag, related_name="setups", blank=True)

    diagram_image = models.ImageField(upload_to="diagrams/", null=True, blank=True)
    bts_image = models.ImageField(upload_to="bts/", null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
