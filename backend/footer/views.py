from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def subscribe(request):
    email = request.data.get("email")

    if not email:
        return Response({"error": "Email required"}, status=400)

    return Response({"message": "Subscribed successfully"})
