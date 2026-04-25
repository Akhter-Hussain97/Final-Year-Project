from django.urls import path
from .views import get_cars, search_cars, create_booking

urlpatterns = [
    path('', get_cars),
    path('search/', search_cars),
    path('booking/', create_booking),
]