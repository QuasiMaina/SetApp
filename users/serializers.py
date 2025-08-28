from rest_framework import serializers
from .models import CustomUser, CameraSetup, LightingSetup


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "username", "email", "role"]


class CameraSetupSerializer(serializers.ModelSerializer):
    recommended_by = UserSerializer(read_only=True)

    class Meta:
        model = CameraSetup
        fields = ["id", "name", "description", "recommended_by"]


class LightingSetupSerializer(serializers.ModelSerializer):
    recommended_by = UserSerializer(read_only=True)

    class Meta:
        model = LightingSetup
        fields = ["id", "name", "description", "recommended_by"]
