from django.urls import path, include
from . import views

urlpatterns  = [
    path('', views.get_all_games),
    path('create_game/', views.create_game),
    path('<int:pk>/',views.game_details),
    path('<int:pk>/edit/', views.edit_game),
    path('<int:pk>/join/', views.join_game),
    path('<int:pk>/comments/', include('comments.urls')),
]