from django.db import models

class Car(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    type = models.CharField(max_length=50)  # SUV, Sedan, etc.
    rating = models.FloatField(default=4.0)
    image = models.ImageField(upload_to='cars/', blank=True, null=True)

    def __str__(self):
        return self.name


class CarBooking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    date = models.DateField()
    days = models.IntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.name} - {self.car.name}"
