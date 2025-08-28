from rest_framework import generics, permissions
from .models import Setup
from .serializers import SetupSerializer

class SetupListCreateView(generics.ListCreateAPIView):
    queryset = Setup.objects.all().order_by("-created_at")
    serializer_class = SetupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class SetupDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Setup.objects.all()
    serializer_class = SetupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
