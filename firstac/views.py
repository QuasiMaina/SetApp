from rest_framework import viewsets
from .models import FirstACSetup
from .serializers import FirstACSetupSerializer

class FirstACSetupViewSet(viewsets.ModelViewSet):
    queryset = FirstACSetup.objects.all()
    serializer_class = FirstACSetupSerializer
