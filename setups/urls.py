from django.urls import path
from .views import SetupListCreateView, SetupDetailView

app_name = "setups"

urlpatterns = [
    # List all setups or create a new one
    path("setups/", SetupListCreateView.as_view(), name="setup-list"),

    # Retrieve, update, or delete a specific setup by UUID
    path("setups/<uuid:pk>/", SetupDetailView.as_view(), name="setup-detail"),
]
