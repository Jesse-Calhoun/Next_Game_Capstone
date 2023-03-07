from django.db import models
from authentication.models import User

# Create your models here.

class Game(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    game_type = models.CharField(max_length=200)
    players_at_game = models.IntegerField()
    next = models.BooleanField()
    indoor = models.BooleanField()
    attendees = models.ManyToManyField(User, related_name='games')
