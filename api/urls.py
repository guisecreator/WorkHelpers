from django.urls import path
from .import views
from django.contrib.auth import get_user_model


User = get_user_model()

urlpatterns = [
    path('tasks/', views.TaskList.as_view(), name='task_list'),
    path('tasks/<int:pk>/', views.TaskDetail.as_view(), name='task_detail'),

]
