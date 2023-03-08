from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, pk):
    comments = Comment.objects.filter(game=pk)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_comment(request, pk):

    serializer = CommentSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save(commenter=request.user, game_id=pk)
    return Response(serializer.data, status=status.HTTP_201_CREATED)