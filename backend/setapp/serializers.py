from rest_framework import serializers
from .models import Setups, Tag
from django.contrib.auth.models import User


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name"]


class SetupSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")
    tags = TagSerializer(many=True, read_only=True)
    tag_ids = serializers.PrimaryKeyRelatedField(
        many=True,
        write_only=True,
        queryset=Tag.objects.all(),
        source="tags",
        required=False
    )

    class Meta:
        model = Setups
        fields = [
            "id", "owner", "title", "scene_type", "description",
            "camera", "lens", "focal_length_mm", "frame_rate", "shutter", "iso", "white_balance",
            "lights", "modifiers", "environment", "mood", "budget_level",
            "tags", "tag_ids", "diagram_image", "bts_image",
            "created_at", "updated_at",
        ]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "is_staff"]