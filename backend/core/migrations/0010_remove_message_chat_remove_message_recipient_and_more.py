# Generated by Django 4.1.2 on 2024-01-29 17:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_user_automated'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='chat',
        ),
        migrations.RemoveField(
            model_name='message',
            name='recipient',
        ),
        migrations.RemoveField(
            model_name='message',
            name='sender',
        ),
        migrations.DeleteModel(
            name='Chat',
        ),
        migrations.DeleteModel(
            name='Message',
        ),
    ]
