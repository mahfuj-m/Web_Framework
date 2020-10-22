
from django.urls import path
from . import views

urlpatterns = [
    
    #path('',views.homeView,name='home'),
    #path('home/',views.homeView,name='home')
    path('',views.HomeView.as_view(),name='home'),
    path('about/',views.AboutView.as_view(),name='about'),
]
