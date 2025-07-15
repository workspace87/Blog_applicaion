import os
import sys

from django.core.wsgi import get_wsgi_application

# This 'path' resolves to blog_backend/ (the parent of backend/)
path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if path not in sys.path:
    sys.path.insert(0, path)

# ***CHANGE THIS LINE TO MATCH THE RENAMED FOLDER:***
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings") # Change 'Backend' to 'backend'
application = get_wsgi_application()