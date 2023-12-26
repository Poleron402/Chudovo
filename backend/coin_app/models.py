from django.db import models
from django.utils import timezone
from watchlist_app.models import WatchList
# Create your models here.
class Coin(models.Model):
    name = models.CharField(null=False)
    symbol = models.CharField(null=True)
    purchased = models.BooleanField(default=False)
    purchased_data = models.TimeField(default=timezone.now)
    purchase_price = models.DecimalField(decimal_places=5, max_digits=40, default=0.0)
    user_list = models.ForeignKey(WatchList, on_delete=models.CASCADE, related_name = "coins")