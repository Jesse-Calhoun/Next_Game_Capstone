from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Game
from .models import User
from .serializers import GameSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_games(request):
    # if request.method == 'GET':
        games = Game.objects.all()
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_game(request):
        # if request.method == 'POST':
                serializer = GameSerializer(data=request.data)
                serializer.is_valid(raise_exception=True)
                serializer.save(user=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
@permission_classes([AllowAny])
def game_details(request, pk):
        game = get_object_or_404(Game, pk=pk)
        serializer = GameSerializer(game)
        return Response(serializer.data)

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])
def edit_game(request, pk):
        game = get_object_or_404(Game, pk=pk)
        user_id = request.user.id
        if game.user.id == user_id:
            if request.method == 'PUT':
                    serializer = GameSerializer(game, data=request.data)
                    serializer.is_valid(raise_exception=True)
                    serializer.save()
                    return Response(serializer.data)
            elif request.method == 'DELETE':
                game.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
        return Response('Unauthorized request.', status=status.HTTP_401_UNAUTHORIZED)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def join_game(request, pk):
        game = get_object_or_404(Game, pk=pk)
        user = get_object_or_404(User, id=request.user.id)
        if game.attendees.contains(user):
                game.attendees.remove(user)
        else:
                game.attendees.add(user)
        serializer = GameSerializer(game)
        return Response(serializer.data, status.HTTP_201_CREATED)