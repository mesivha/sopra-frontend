from django.urls import path
from .views import login_api, health_check

urlpatterns = [
    path('health/', health_check),
    path('login/', login_api),
]
