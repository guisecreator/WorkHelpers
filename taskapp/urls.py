from django.urls import path
from django.contrib.auth import views as auth_views
from .import views
from django.contrib.auth import get_user_model


User = get_user_model()

urlpatterns = [
    path('tasks/', views.index_view, name="index"),
    path('timer/', views.timer_view, name="timer"),
    path('', auth_views.LoginView.as_view(), name='login'),
    path('logout', auth_views.LogoutView.as_view(), name='logout'),

]
