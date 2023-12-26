from django.urls import path
from .views import PromptView
urlpatterns = [
    path("<str:crypto>", PromptView.as_view(), name="generator")
]
