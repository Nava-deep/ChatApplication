# Generated by Django 5.1.1 on 2024-10-06 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_alter_profile_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='img',
            field=models.ImageField(default='defaultpic.jpg', upload_to=''),
        ),
    ]