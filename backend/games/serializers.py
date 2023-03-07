from rest_framework import serializers
from .models import Game

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'user_id', 'address', 'game_type', 'next', 'indoor', 'attendees']