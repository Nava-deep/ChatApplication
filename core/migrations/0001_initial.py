# Generated by Django 5.1.1 on 2024-09-23 13:29

import django.db.models.deletion
import django.db.models.manager
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Chat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.CharField(choices=[('BG', 'BlueGradient'), ('GG', 'GreenGradient'), ('PG', 'PurpleGradient'), ('DG', 'DynamicGradient')], default='BG', max_length=2)),
                ('date', models.DateField(auto_now_add=True)),
                ('users', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            managers=[
                ('chats', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            name='Groups',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now_add=True)),
                ('admin', models.ManyToManyField(related_name='admin', to=settings.AUTH_USER_MODEL)),
                ('users', models.ManyToManyField(related_name='users', to=settings.AUTH_USER_MODEL)),
            ],
            managers=[
                ('grps', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(default='', upload_to='')),
                ('description', models.CharField(max_length=1000, null=True)),
                ('links', models.CharField(max_length=1000, null=True)),
                ('date', models.DateField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            managers=[
                ('profiles', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            name='Messages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(null=True, upload_to='')),
                ('file', models.FileField(null=True, upload_to='')),
                ('message', models.CharField(max_length=1000, null=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('chat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.chat')),
                ('grp', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.groups')),
                ('hide', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
                ('sent_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.profile')),
            ],
            managers=[
                ('msgs', django.db.models.manager.Manager()),
            ],
        ),
    ]