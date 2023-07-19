# hats/api/hats_rest/models.py

from django.db import models


class LocationVO(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Hat(models.Model):
    fabric = models.CharField(max_length=100)
    style_name = models.CharField(max_length=100)
    color = models.CharField(max_length=50)
    picture_url = models.URLField()
    wardrobe_location = models.ForeignKey(LocationVO, on_delete=models.CASCADE)

    def __str__(self):
        return self.style_name
