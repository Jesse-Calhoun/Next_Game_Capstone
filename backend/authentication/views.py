from django.contrib.auth import get_user_model
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer, UserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import render, get_object_or_404
from .models import User
# User = get_user_model()


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_users(request):
    users = User.objects.all()
    serializer = RegistrationSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_user_by_id(request, pk):
    user = get_object_or_404(User, pk=pk)
    serializer = UserSerializer(user)
    return Response(serializer.data)

# @api_view(['PUT'])
# @permission_classes([IsAuthenticated])
# def e

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_user(request, pk):
    user = get_object_or_404(User, id=request.user.id)
    serializer = UserSerializer(user, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)
    
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def follow_user(request, pk):
    user = get_object_or_404(User, id=request.user.id)
    friend = get_object_or_404(User, id=pk)
    if user.friends.contains(friend):
        user.friends.remove(friend)
    else:
        user.friends.add(friend)
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_201_CREATED)





    # user.friends.clear()
    # user.friends.add(*request.data['friends'])
    # serializer = UserSerializer(user, data=request.data)
    # serializer.is_valid(raise_exception=True)
    # serializer.save()
    # return Response(serializer.data, status=status.HTTP_200_OK)