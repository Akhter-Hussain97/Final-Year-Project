from django.urls import path
from .views import create_booking, get_bookings

urlpatterns = [
    path('create/', create_booking),
    path('', get_bookings),
]