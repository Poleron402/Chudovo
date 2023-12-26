from django.db import models
from user_app.models import User
# Create your models here.
class WatchList(models.Model):
    whose_list = models.OneToOneField(User, on_delete = models.CASCADE)

