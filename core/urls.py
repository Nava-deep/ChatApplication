from django.urls import path
from .views import *

urlpatterns = [
    path('',check_login,name='home'),
    path('login/',Login,name='login'),
    path('signin/',signin,name='signin'),
    path('chat/',chat,name='chat'),
    path('logout/',Logout,name='logout'),
    path('post/',upload,name='post'),
    path('t/',test,name='test'),
    path('profile/',profile,name='profile'),
    path('upload/',uploads,name='upload')
]