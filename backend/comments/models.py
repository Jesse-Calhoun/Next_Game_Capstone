from django.db import models
from authentication.models import User
from games.models import Game

# Create your models here.

class Comment(models.Model):
    commenter = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    text = models.CharField(max_length=200)