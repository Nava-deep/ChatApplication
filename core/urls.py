from django.urls import path
from .views import *

urlpatterns = [
    path('',check_login,name='home'),
    path("home/",home,name="h"),
    path('login/',Login,name='login'),
    path('signin/',signin,name='signin'),
    path('chat/',chat,name='chat'),
    path('logout/',Logout,name='logout'),
    path('post/',upload,name='post'),
    path('t/',test,name='test'),
    path('profile/',profile,name='profile'),
    path('profile/<int:id>/',pro_get,name='pro_get'),
    path('upload/',uploads,name='upload'),
    path("chats/",lc,name='lc'),
    path("chat/<int:id>/",ch,name='ch'),
    path("search/",search,name="search"),
    path("user/",user,name="user"),
]