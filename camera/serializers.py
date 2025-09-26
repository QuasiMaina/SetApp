from rest_framework import serializers
from .models import CameraSetup

class CameraSetupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CameraSetup
        fields = '__all__'
