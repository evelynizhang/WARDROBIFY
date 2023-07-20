
from django.db import models



class LocationVO(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    import_href = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name


class Hat(models.Model):
    fabric = models.CharField(max_length=100)
    style_name = models.CharField(max_length=100)
    color = models.CharField(max_length=50)
    picture_url = models.URLField()
    wardrobe_location = models.ForeignKey(
        LocationVO, on_delete=models.CASCADE, db_column="wardrobe_location_id"
    )

    def __str__(self):
        return self.style_name
