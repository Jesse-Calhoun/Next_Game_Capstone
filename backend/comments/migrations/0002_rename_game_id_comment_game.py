# Generated by Django 4.1.7 on 2023-03-08 20:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='game_id',
            new_name='game',
        ),
    ]
