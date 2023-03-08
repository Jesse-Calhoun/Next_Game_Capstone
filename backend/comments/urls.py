from django.urls import path
from comments import views


urlpatterns = [
    path('', views.get_all_comments),
    path('create/', views.post_comment),
]