from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',check_login,name='home'),
    path('login/',Login,name='login'),
    path('signin/',signin,name='signin'),
    path('chat/',chat,name='chat'),
    path('logout/',Logout,name='logout'),
    path('post/',upload,name='post'),
    path('t/',test,name='test'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)