from django.urls import path
from .views import WatchlistManager

urlpatterns = [
    path("", WatchlistManager.as_view(), name="mywl"),
]