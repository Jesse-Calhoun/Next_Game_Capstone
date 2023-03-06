from rest_framework import serializers
from .models import Game

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'user_id', 'address', 'game_type', 'players_at_game', 'next', 'indoor', 'attendees']