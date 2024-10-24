from django.shortcuts import render,redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import *
from django.urls import *
from django.contrib.auth import authenticate,login,logout
from django.core.files.storage import FileSystemStorage as FS

def check_login(request):
    c = reverse("login")
    if request.user.is_authenticated:
        c = reverse("home")
    return render(request,"intro.html",{"url":c})

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
            return JsonResponse({"url":reverse('h')})
        return JsonResponse({"token":1})
    return render(request,'login.html')

def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']
        if User.objects.filter(username=username).exists():return JsonResponse({"token":1})
        elif User.objects.filter(email=email).exists():return JsonResponse({"token":2})
        else:
            user = User.objects.create_user(username=username,password=password,email=email)
            Profile.profiles.create(user=user)
            user.save()
            login(request,user)
            return JsonResponse({"url":reverse('h')})
    return render(request,'signin.html')

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

def profile(request):
    a = Profile.profiles.get(user=request.user)
    return render(request,"profile.html",{"profile":a})

def test(request):
    return render(request,'test.html')

def uploads(request):
    if request.method == 'POST':
        if request.POST['token'] == '1':
            fs = FS()
            p = Profile.profiles.get(user=request.user)
            r = request.FILES['file']
            if p.img.name != 'defaultpic.jpg':
                fs.delete(p.img.name)
            p.img = r.name
            p.save()
            if not fs.exists(r.name):
                fs.save(r.name,r)
            return JsonResponse({"url":fs.url(r.name)})
        elif request.POST['token'] == '2':
            a = Profile.profiles.get(user=request.user)
            des = request.POST['des']
            a.description = des
            a.save()
            return JsonResponse({"s":"1"})
        
def lc(request):
    return render(request,"chats.html")

def search(request):
    if request.method == 'POST':
        if request.POST["text"]!="":
            f = Profile.profiles.filter(user__username__startswith=request.POST["text"])
            d = []
            for g in f:
                d.append({
                    "username":g.user.username,
                    "user_profile":"/chat/profile/"+str(g.id),
                    "img_src":"/media/"+str(g.img),
                    "chat":"/chat/chat/"+str(g.user.id)
                })
        return JsonResponse({"result":d},safe=False)
    return render(request,"search.html")
    
def pro_get(request,id):
    return render(request,"pro_get.html",{"profile":Profile.profiles.get(id=id)})

def ch(request,id):
    h = Chat.chats.filter(users__in = [request.user,User.objects.get(id=id)]).annotate(c=Count("users")).filter(c=2).first()
    if not h:
        h = Chat()
        h.save()
        h.users.add(request.user,User.objects.get(id=id))
        h.save()
    return render(request,"pchat.html",{"pchat":h})