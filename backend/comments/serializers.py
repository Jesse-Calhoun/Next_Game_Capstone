from rest_framework import serializers
from .models import Comment

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'commenter', 'game_id', 'text']