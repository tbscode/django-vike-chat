# Generated by Django 4.1.2 on 2024-03-31 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_userprofile_contact_secret'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='is_bot',
            field=models.BooleanField(default=False),
        ),
    ]