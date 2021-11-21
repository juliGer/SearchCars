from django.db import models


class Car(models.Model):
    plate = models.CharField(max_length=9)
    name = models.CharField(max_length=255)
