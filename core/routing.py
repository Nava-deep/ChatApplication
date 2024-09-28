from django.urls import path
from .consumers import *

wb_urlspatterns = [
    path('hello/',Connection.as_asgi())
]