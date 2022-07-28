from django.urls import path
from . import views

urpatterns = [
    path('home/', views.HomePage, name='Home'),
]