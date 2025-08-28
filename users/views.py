from rest_framework import viewsets, permissions, generics
from .models import CustomUser, CameraSetup, LightingSetup
from .serializers import UserSerializer, CameraSetupSerializer, LightingSetupSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class CameraSetupViewSet(viewsets.ModelViewSet):
    queryset = CameraSetup.objects.all()
    serializer_class = CameraSetupSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(recommended_by=self.request.user)


class LightingSetupViewSet(viewsets.ModelViewSet):
    queryset = LightingSetup.objects.all()
    serializer_class = LightingSetupSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(recommended_by=self.request.user)

# Register new users
class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]  # Anyone can register

# List all users (only admins can see this)
class UserListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]