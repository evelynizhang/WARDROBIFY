from django.db import models
# Create your models here.


class BinVO(models.Model):
    closet_name = models.CharField(max_length=100)
    bin_number = models.PositiveSmallIntegerField()
    bin_size = models.PositiveSmallIntegerField()
    import_href = models.CharField(max_length=200, unique=True)


class Shoe(models.Model):
    manufacturer = models.CharField(max_length=200, null=True, default=True)
    model_name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    url = models.URLField(null=True, default=True)
    bin = models.ForeignKey(
        BinVO,
        related_name="shoes",
        on_delete=models.CASCADE,
        null=True
    )
    def __str__(self):
        return self.brand
