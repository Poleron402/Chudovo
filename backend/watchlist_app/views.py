from django.shortcuts import render

# Create your views here.
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from .serializers import WatchlistSerializer
from rest_framework.response import Response
from .models import WatchList
# from coin_app.models import Coin
from coin_app.serializers import CoinSerializer, Coin
from rest_framework.status import HTTP_200_OK, HTTP_404_NOT_FOUND
 
class WatchlistManager(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        my_watchlist = request.user.watchlist
        my_coins = Coin.objects.filter(user_list=my_watchlist)
        ser = CoinSerializer(my_coins, many=True)
        return Response({"My Coins": ser.data}, HTTP_200_OK)


