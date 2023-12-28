from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    email = models.EmailField(verbose_name="Email address", max_length=255, unique=True)
    display_name = models.CharField(null=True, blank=True, default=email)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []