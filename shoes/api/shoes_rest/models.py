from django.db import models


# Create your models here.
class BinVO(models.Model):
    closet_name = models.CharField(max_length=100)
    bin_number = models.PositiveSmallIntegerField()
    bin_size = models.PositiveSmallIntegerField()
    import_href = models.CharField(max_length=200, unique=True)

class Shoe(models.Model):
    brand = models.CharField(max_length=200)
    size = models.PositiveSmallIntegerField()
    color = models.CharField(max_length=200)
    bin = models.ForeignKey(
        BinVO,
        related_name="shoes",
        on_delete=models.CASCADE,
<<<<<<< HEAD
        null=True,
=======
        null=True
>>>>>>> main
    )

    def __str__(self):
        return self.brand
