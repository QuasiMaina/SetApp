from rest_framework import viewsets
from .models import LightingSetup
from .serializers import LightingSetupSerializer

class LightingSetupViewSet(viewsets.ModelViewSet):
    queryset = LightingSetup.objects.all()
    serializer_class = LightingSetupSerializer
