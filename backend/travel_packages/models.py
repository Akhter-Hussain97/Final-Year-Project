from django.db import models

class Package(models.Model):
    title = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    price = models.IntegerField()
    date = models.DateField()
    description = models.TextField()
    image = models.URLField()

    def __str__(self):
        return self.title