from rest_framework import serializers
from .models import CameraSetup, LightingSetup, GripSetup, FirstACSetup, Scenario, AboutContent

class CameraSetupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CameraSetup
        fields = "__all__"


class LightingSetupSerializer(serializers.ModelSerializer):
    class Meta:
        model = LightingSetup
        fields = "__all__"


class GripSetupSerializer(serializers.ModelSerializer):
    class Meta:
        model = GripSetup
        fields = "__all__"


class FirstACSetupSerializer(serializers.ModelSerializer):
    class Meta:
        model = FirstACSetup
        fields = "__all__"


class ScenarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scenario
        fields = "__all__"


class AboutContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutContent
        fields = "__all__"
