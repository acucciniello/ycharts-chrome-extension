from django.shortcuts import render
from django.http import HttpResponse
import requests
import os
# Create your views here.

def index(request):
  apiKey = os.environ['API_KEY']
  url = 'https://newsapi.org/v1/articles?source=business-insider&sortBy=latest&apiKey=' + apiKey
  r = requests.get(url)
  print "Here is the return: %s" % r
  return HttpResponse(r)