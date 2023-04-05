from django.urls import path

from .import views

urlpatterns = [
    path('', views.index_view, name="index"),
    path('timer/', views.timer_view, name="timer"),

]
