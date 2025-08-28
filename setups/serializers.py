from rest_framework import serializers
from .models import Setup

class SetupSerializer(serializers.ModelSerializer):
    created_by_username = serializers.ReadOnlyField(source="created_by.username")

    class Meta:
        model = Setup
        fields = [
            "id",
            "title",
            "description",
            "setup_type",
            "department",
            "created_by",
            "created_by_username",
            "created_at",
        ]
        read_only_fields = ("id", "created_by", "created_at")
