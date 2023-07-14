from django.db import models


# Create your models here.
class Product(models.Model):
    name=models.CharField(max_length=200)
    price=models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    description = models.CharField(max_length=1000)
    image=models.ImageField(null=True,blank=True)
    category=models.CharField(max_length=200,null=True,blank=True)

    def __str__(self):
        return self.name
