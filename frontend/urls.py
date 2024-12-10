from django.urls import path,include
from .views import index
urlpatterns = [
                    #blank means for any we get any url 
    path("",index ),                     

]
