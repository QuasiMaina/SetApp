from rest_framework import viewsets
from .models import CameraSetup
from .serializers import CameraSetupSerializer

class CameraSetupViewSet(viewsets.ModelViewSet):
    queryset = CameraSetup.objects.all()
    serializer_class = CameraSetupSerializer
