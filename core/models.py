from django.db.models import *
from django.contrib.auth.models import User

class Profile(Model):
    user = ForeignKey(User,on_delete=CASCADE)
    date = DateField(auto_now_add=True)
    img = ImageField(default='defaultpic.jpg')
    description = CharField(max_length=1000,null=True,blank=True)
    links = CharField(max_length=1000,null=True,blank=True)
    profiles = Manager()
    date = DateField(auto_now_add=True)

class Chat(Model):
    themes = {
        'BG':'BlueGradient',
        'GG':'GreenGradient',
        'PG':'PurpleGradient',
        'DG':'DynamicGradient'
    }
    theme = CharField(max_length=2,choices=themes,default='BG')
    date = DateField(auto_now_add=True)
    chats = Manager()
    users = ManyToManyField(User)
    date = DateField(auto_now_add=True)

class Groups(Model):
    users = ManyToManyField(User,related_name='users')
    admin = ManyToManyField(User,related_name='admin')
    grps = Manager()
    date = DateField(auto_now_add=True)

class Messages(Model):
    chat = ForeignKey(Chat,on_delete=CASCADE)
    grp = ForeignKey(Groups,on_delete=CASCADE)
    sent_by = ForeignKey(Profile,on_delete=SET_NULL,null=True)
    img = ImageField(null=True)
    file = FileField(null=True)
    hide = OneToOneField(User,on_delete=SET_NULL,null=True)
    message = CharField(max_length=1000,null=True)
    msgs = Manager()
    date = DateTimeField(auto_now_add=True)