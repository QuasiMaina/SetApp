
import os
from django.core.wsgi import get_wsgi_application

# Correct reference to setapp settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "setapp.settings")

application = get_wsgi_application()
