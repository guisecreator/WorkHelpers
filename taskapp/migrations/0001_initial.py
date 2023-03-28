# Generated by Django 4.1.7 on 2023-03-28 16:00

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Tasks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='title')),
                ('time_create', models.DateTimeField(auto_now_add=True, verbose_name='Time add in time_create')),
                ('time_update', models.DateTimeField(auto_now=True, verbose_name='Time update in time_create')),
                ('image', models.ImageField(upload_to='meals/%Y-%m-%d')),
                ('description', models.TextField(verbose_name='description')),
                ('duration', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)], verbose_name='duration')),
                ('slug', models.SlugField(blank=True, max_length=255, null=True, unique=True, verbose_name='URL')),
                ('username', models.ForeignKey(db_column='author', on_delete=django.db.models.deletion.CASCADE, related_name='recipes', to=settings.AUTH_USER_MODEL, verbose_name='автор')),
            ],
            options={
                'verbose_name': 'Tasks',
            },
        ),
    ]
