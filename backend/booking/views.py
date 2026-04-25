# booking/views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Booking
from .serializers import BookingSerializer


# ✅ CREATE BOOKING
@api_view(['POST'])
def create_booking(request):
    print("Received booking data:", request.data)  # Debugging line
    serializer = BookingSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    print("Validation errors:", serializer.errors)  # Debugging line
    return Response(serializer.errors, status=400)


# ✅ GET ALL BOOKINGS (THIS WAS MISSING)
@api_view(['GET'])
def get_bookings(request):
    bookings = Booking.objects.all()
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)
