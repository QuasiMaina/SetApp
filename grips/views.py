from rest_framework import viewsets
from .models import GripSetup
from .serializers import GripSetupSerializer

class GripSetupViewSet(viewsets.ModelViewSet):
    queryset = GripSetup.objects.all()
    serializer_class = GripSetupSerializer
