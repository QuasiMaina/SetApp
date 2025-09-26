from rest_framework import serializers
from .models import LightingSetup

class LightingSetupSerializer(serializers.ModelSerializer):
    class Meta:
        model = LightingSetup
        fields = "__all__"
