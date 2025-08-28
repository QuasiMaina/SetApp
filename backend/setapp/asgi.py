
import os
from django.core.asgi import get_asgi_application

# Correct reference to setapp settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "setapp.settings")

application = get_asgi_application()
