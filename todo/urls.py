from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

handler404 = "todo.views.page_not_found"  # noqa
handler500 = "todo.views.server_error"  # noqa
handler403 = "todo.views.permission_denied"  # noqa

urlpatterns = [
    path('tasks/', include('taskapp.urls')),
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
