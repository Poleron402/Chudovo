from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import WatchList

class WatchlistSerializer(ModelSerializer):
    coins = SerializerMethodField()
    class Meta:
        model = WatchList
        fields = ["whose_list", "coins"]
    def get_coins(self, instance):
        coins = instance.coins.all()
        return coins