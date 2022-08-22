from django.forms import ModelForm
from .models import Project, Contact

class ProjectForm(ModelForm):
    class Meta:
        model = Project
        fields = [
            'title', 'description', 'tags', 'image'
        ]
        # labels = {
        #     'title':, 'description', 'tags', 'image'
        # }

class ContactForm(ModelForm):
    class Meta:
        model = Contact
        fields = [
            'name', 'email', 'subject', 'message'
        ]

        labels = {
            'name':'Your Name', 
            'email':'Your Email', 
            'subject':'Subject Line', 
            'message':'Your Message',
        }