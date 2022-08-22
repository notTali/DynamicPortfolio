from dataclasses import fields
from turtle import title
from django.forms import ModelForm
from .models import Project

class ProjectForm(ModelForm):
    class Meta:
        model = Project
        fields = [
            'title', 'description', 'tags', 'image'
        ]
