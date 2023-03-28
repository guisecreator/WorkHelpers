from django.contrib import admin
from .models import *


class TasksAdmin(admin.ModelAdmin):

    list_display = [
        'username', 
        'title',
        'time_create',
        'time_update',
        'image',
        'description',
        'duration',
        'slug',
    ]

    prepopulated_fields = {'slug': ('username',)}
    list_display_links = ('username', 'slug')


admin.site.register(Tasks, TasksAdmin)