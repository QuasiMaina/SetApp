from rest_framework import viewsets, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

from .models import Setups, Tag
from .serializers import SetupSerializer, TagSerializer
from .permissions import IsOwnerOrReadOnly

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all().order_by("name")
    serializer_class = TagSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ["name"]
    ordering_fields = ["name"]

class SetupViewSet(viewsets.ModelViewSet):
    queryset = Setups.objects.all()
    serializer_class = SetupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    parser_classes = [MultiPartParser, FormParser]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]

    # filter params: ?scene_type=&mood=&budget_level=&camera=&lens=&tags=
    filterset_fields = ["scene_type", "mood", "budget_level", "camera", "lens", "tags"]
    search_fields = ["title", "description", "camera", "lens", "lights", "modifiers", "environment"]
    ordering_fields = ["created_at", "title"]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
