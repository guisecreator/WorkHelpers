from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator


User = get_user_model()

class Tasks(models.Model):

    username = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        db_column="author",
        related_name="recipes",
        verbose_name="автор",
    )

    title = models.CharField(
        max_length=50,
        verbose_name="title",
    )

    time_create = models.DateTimeField(
       auto_now_add=True, 
       verbose_name='Time add in time_create',
       )
   
    time_update = models.DateTimeField(
       auto_now=True, 
       verbose_name='Time update in time_create',
       )
    
    image = models.ImageField(upload_to="meals/%Y-%m-%d")

    description = models.TextField(verbose_name="description")

    duration = models.PositiveIntegerField(
        validators=[MinValueValidator(1)],
        verbose_name="duration"
    )

    slug = models.SlugField(
       max_length=255,
       unique=True,
       db_index=True,
       verbose_name="URL",
       null=True,
       blank=True,
    )

    class Meta:
        verbose_name = "Tasks"

    def __str__(self):
        return f"{self.title} - {self.username}"
    
    
class Task(models.Model):

    description = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.description