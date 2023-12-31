from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
import requests
from openai import OpenAI
from cryptoproj.settings import env
from dotenv import load_dotenv

import os
load_dotenv()

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)
# Create your views here.
class PromptView(APIView):
    def get(self, request, crypto):
        
        response = client.chat.completions.create(model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"Tell me more about {crypto} cryptocurrency"}
        ])
        
        return Response(response)
