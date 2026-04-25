from rest_framework import serializers
from .models import Car, CarBooking


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'


class CarBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarBooking
        fields = '__all__'