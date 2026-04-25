# booking/models.py

from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    destination = models.CharField(max_length=200)
    date = models.DateField()
    persons = models.IntegerField()
    price = models.IntegerField()
   # created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name