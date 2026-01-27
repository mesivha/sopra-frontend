from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def health_check(request):
    return Response({
        "status": "ok",
        "message": "Django backend is alive"
    })
@api_view(['POST'])
def login_api(request):
    username = request.data.get("username")
    password = request.data.get("password")

    # if username == "admin" and password == "admin":
    return Response({"success": True, "token": "fake-jwt"})
    
    return Response({"success": False}, status=401)
