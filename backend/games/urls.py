from django.urls import path
from . import views

urlpatterns  = [
    path('', views.get_all_games),
    path('create_game/', views.create_game),
    path('<int:pk>/',views.game_details),
    path('<int:pk>/edit/', views.edit_game)
]