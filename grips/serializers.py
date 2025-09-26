from rest_framework import serializers
from .models import GripSetup

class GripSetupSerializer(serializers.ModelSerializer):
    class Meta:
        model = GripSetup
        fields = "__all__"
