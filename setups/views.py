from rest_framework import generics, permissions
from .models import Setup
from .serializers import SetupSerializer


class SetupListCreateView(generics.ListCreateAPIView):
    """
    List all setups or create a new setup.
    Requires authentication for creation.
    """
    queryset = Setup.objects.all().order_by("-created_at")
    serializer_class = SetupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        # ✅ automatically set the logged-in user as creator
        serializer.save(created_by=self.request.user)


class SetupDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update, or delete a specific setup.
    Only authenticated users can modify.
    """
    queryset = Setup.objects.all()
    serializer_class = SetupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_update(self, serializer):
        # ✅ ensure `created_by` is not overridden during update
        serializer.save(created_by=self.request.user)
