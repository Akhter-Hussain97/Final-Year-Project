from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactSerializer


@api_view(['POST'])
def contact_api(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Contact saved successfully"}, status=201)

    return Response(serializer.errors, status=400)



