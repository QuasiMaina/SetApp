from django.urls import path
from .views import SetupListCreateView, SetupDetailView

urlpatterns = [
    path("setups/", SetupListCreateView.as_view(), name="setup-list"),
    path("setups/<uuid:pk>/", SetupDetailView.as_view(), name="setup-detail"),
]
