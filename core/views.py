from django.shortcuts import render,redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import *
from django.urls import *
from django.contrib.auth import authenticate,login,logout
from django.core.files.storage import FileSystemStorage as FS

def check_login(request):
    if request.user.is_authenticated:
        return render(request,'home.html')
    return redirect('login')

def home(request):
    pr = Profile.profiles.get(user=request.user)
    chat = Chat.chats.filter(users__in = [request.user])
    grp = Groups.grps.filter(users__in = [request.user])
    return render(request,'home.html',{'profile':pr,'chats':chat,'grp':grp})

def Login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        if not User.objects.filter(username=username).exists():return JsonResponse({"token":3})
        user = authenticate(request,username=username,password=password)
        if user:
            login(request,user) 
            return JsonResponse({"url":reverse('home')})
        return JsonResponse({"token":1})
    return render(request,'login.html',{'token':2})

def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']
        if User.objects.filter(username=username).exists():return JsonResponse({"token":1})
        elif User.objects.filter(email=email).exists():return JsonResponse({"token":2})
        else:
            user = User.objects.create_user(username=username,password=password,email=email)
            user.save()
            login(request,user)
            return JsonResponse({"url":reverse('home')})
    return render(request,'signin.html',{'token':3})

def Logout(request):
    logout(request)
    return redirect('login')

def chat(request,id):
    chat = Chat.chats.get(id=id)
    return render(request,'chat.html',{'type':'chat','chat':chat})

def grp(request,id):
    grp = Groups.grps.get(id=id)
    return render(request,'chat.html',{'type':'grp','grp':grp})

def upload(request):
    if request.method == 'POST':
        a = request.FILES['file']
        token = request.POST['token']
        id = request.POST['id']
        msg = request.POST['msg']
        if token == 1:
            msg = Messages(chat=id,sent_by=request.user,message=msg,img=a.name)
            msg.save()
        else:
            msg = Messages(grp=id,sent_by=request.user,message=msg,img=a.name)
            msg.save()
        fs = FS()
        if not fs.exists(a.name):
            fs.save(a.name,a)
        return JsonResponse({"status":1})

def test(request):
    if request.method == 'POST':
        if request.POST['token'] == '1':
            return JsonResponse({"url":reverse('d')})
    return render(request,'test.html')