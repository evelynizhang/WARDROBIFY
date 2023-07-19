from django.db import models

# Create your models here.

class Shoe(models.Model):
    brand = models.CharField(max_length=200)
    size = models.PositiveSmallIntegerField()
    color = models.CharField(max_length=200)

    def __str__(self):
        return self.brand
