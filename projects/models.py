import email
from pyexpat import model
from turtle import mode, title
from django.db import models
import uuid

# Create your models here.
class Project(models.Model):
    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True, null=False, blank=False)
    title = models.CharField(max_length=200, null=False, blank=False)
    description = models.CharField(max_length=200, null=False, blank=False)
    tags = models.ManyToManyField('Tag')
    image = models.ImageField(null=False, blank=False)

    def __str__(self):
        return self.title

class Tag(models.Model):
    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True, null=False, blank=False)
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class Contact(models.Model):
    id = models.UUIDField(editable=False, default=uuid.uuid4, primary_key=True, null=False, blank=False)
    name = models.CharField(max_length=200, null=False, blank=False)
    email = models.EmailField(max_length=200, null=False, blank=False)
    subject = models.CharField(max_length=200, null=False, blank=False)
    message = models.CharField(max_length=500, null=False, blank=False)
    # tags = models.ManyToManyField('Tag')
    # image = models.ImageField(null=False, blank=False)

    def __str__(self):
        return self.name