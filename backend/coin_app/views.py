from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from .serializers import CoinSerializer
from .models import Coin
from watchlist_app.models import WatchList
from rest_framework.status import HTTP_201_CREATED, HTTP_404_NOT_FOUND, HTTP_200_OK, HTTP_400_BAD_REQUEST
# Create your views here.
class AddCoin(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self, request): 
        watchlist, created = WatchList.objects.get_or_create(whose_list = request.user)
        if Coin.objects.filter(name = request.data.get('name'),  user_list=watchlist).exists():
            return Response({"error": "Coin already exists in the watchlist"}, status=HTTP_400_BAD_REQUEST)
        else:
            new_item = Coin.objects.create(name = request.data.get('name'), symbol = request.data.get("symbol"), purchased = request.data.get('purchased'), purchase_price = request.data.get('purchase_price'), user_list=watchlist)
            if new_item:
                new_item.save()
                return Response(f"You are now watching {new_item.name}. Started watching at price {new_item.purchase_price}", HTTP_201_CREATED)
            return Response("Error adding a coin (Duplicate?)", HTTP_404_NOT_FOUND)
    def delete(self, request, id):
        watchlist, created = WatchList.objects.get_or_create(whose_list = request.user)
        item_to_rm = Coin.objects.get(name = id, user_list=watchlist)
        item_to_rm.delete()
        return Response(f"{item_to_rm} was deleted", HTTP_200_OK)
    