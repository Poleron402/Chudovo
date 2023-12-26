from django.urls import path
from .views import AddCoin

urlpatterns = [
    path("", AddCoin.as_view(), name="adding a coin"),
    path("rm/<str:id>", AddCoin.as_view(), name="rming a coin")
]


