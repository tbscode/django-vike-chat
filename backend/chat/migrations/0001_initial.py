# Generated by Django 4.1.2 on 2024-01-16 14:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


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
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('text', models.TextField()),
                ('read', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('chat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='chat.chat')),
                ('recipient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='message_recipient', to=settings.AUTH_USER_MODEL)),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='message_sender', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='chat',
            name='messages',
            field=models.ManyToManyField(blank=True, null=True, related_name='chat_messages', to='chat.message'),
        ),
        migrations.AddField(
            model_name='chat',
            name='u1',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='u1', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='chat',
            name='u2',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='u2', to=settings.AUTH_USER_MODEL),
        ),
    ]
