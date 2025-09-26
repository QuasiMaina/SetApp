from rest_framework import viewsets, permissions
from .models import CameraSetup, LightingSetup, GripSetup, FirstACSetup, Scenario, AboutContent
from .serializers import (
    CameraSetupSerializer, LightingSetupSerializer, GripSetupSerializer,
    FirstACSetupSerializer, ScenarioSerializer, AboutContentSerializer
)

class CameraSetupViewSet(viewsets.ModelViewSet):
    queryset = CameraSetup.objects.all()
    serializer_class = CameraSetupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class LightingSetupViewSet(viewsets.ModelViewSet):
    queryset = LightingSetup.objects.all()
    serializer_class = LightingSetupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class GripSetupViewSet(viewsets.ModelViewSet):
    queryset = GripSetup.objects.all()
    serializer_class = GripSetupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class FirstACSetupViewSet(viewsets.ModelViewSet):
    queryset = FirstACSetup.objects.all()
    serializer_class = FirstACSetupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class ScenarioViewSet(viewsets.ModelViewSet):
    queryset = Scenario.objects.all()
    serializer_class = ScenarioSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class AboutContentViewSet(viewsets.ModelViewSet):
    queryset = AboutContent.objects.all()
    serializer_class = AboutContentSerializer
    permission_classes = [permissions.IsAdminUser]
