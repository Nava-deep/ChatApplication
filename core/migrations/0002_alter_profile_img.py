# Generated by Django 5.1.1 on 2024-10-06 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='img',
            field=models.ImageField(default='media/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg', upload_to=''),
        ),
    ]
