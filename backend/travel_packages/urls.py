from django.urls import path
from .views import search_packages

urlpatterns = [ 
    path('search/', search_packages)
]