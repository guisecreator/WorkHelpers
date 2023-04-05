from django.conf import settings
from django.contrib.auth import get_user_model

PER_PAGE = getattr(settings, "PAGINATOR_PER_PAGE", None)
User = get_user_model()

