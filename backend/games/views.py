from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Game
from .serializers import GameSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_games(request):
    if request.method == 'GET':
        games = Game.objects.filter()
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)