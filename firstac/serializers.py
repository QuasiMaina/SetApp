from rest_framework import serializers
from .models import FirstACSetup

class FirstACSetupSerializer(serializers.ModelSerializer):
    class Meta:
        model = FirstACSetup
        fields = "__all__"
