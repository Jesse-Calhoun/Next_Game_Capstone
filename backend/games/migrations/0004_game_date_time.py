# Generated by Django 4.1.7 on 2023-03-08 17:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0003_remove_game_players_at_game'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='date_time',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 3, 7, 11, 30)),
            preserve_default=False,
        ),
    ]