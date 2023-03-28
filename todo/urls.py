from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.storage import staticfiles_storage as storage
from django.urls import include, path
from django.views.generic.base import RedirectView


handler404 = "todo.views.page_not_found"  # noqa
handler500 = "todo.views.server_error"  # noqa
handler403 = "todo.views.permission_denied"  # noqa

urlpatterns = [
    path('', include('taskappp.urls')),
    path('admin/', admin.site.urls),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
