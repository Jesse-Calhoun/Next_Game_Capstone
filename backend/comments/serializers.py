from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'commenter_id', 'game_id', 'text']
        # write_only_fields = {'game_id': {'write_only': True}}