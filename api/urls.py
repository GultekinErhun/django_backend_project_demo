from django.urls import path,include
from .views import main
from .views import RoomView


urlpatterns = [
   
    path("api",main),  
    path('room', RoomView.as_view()),
       
        
]

