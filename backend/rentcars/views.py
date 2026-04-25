from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Car
from .serializers import CarSerializer, CarBookingSerializer


# 🔥 GET ALL CARS
@api_view(['GET'])
def get_cars(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)


# 🔥 SEARCH / FILTER
@api_view(['GET'])
def search_cars(request):
    location = request.GET.get('location')
    car_type = request.GET.get('type')

    cars = Car.objects.all()

    if location:
        cars = cars.filter(location__icontains=location)

    if car_type and car_type != "All":
        cars = cars.filter(type__iexact=car_type)

    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)


# 🔥 BOOK CAR
@api_view(['POST'])
def create_booking(request):
    serializer = CarBookingSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "Car booked successfully"},
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=400)
