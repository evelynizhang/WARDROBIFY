
from django.db import models


class Hat(models.Model):
    fabric = models.CharField(max_length=100)
    style_name = models.CharField(max_length=100)
    color = models.CharField(max_length=50)
    picture_url = models.URLField()
    wardrobe_location = models.CharField(max_length=100)

    def __str__(self):
        return self.style_name
