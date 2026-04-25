from rest_framework.decorators import api_view
from rest_framework.response import Response
from booking.models import Booking 

@api_view(['GET'])
def search_packages(request):
    destination = request.GET.get('destination', '').strip().lower()
    date = request.GET.get('date', None)
    price = request.GET.get('price', None)

    bookings = Booking.objects.all()

    if destination:
        bookings = bookings.filter(destination__icontains=destination)

    if date:
        bookings = bookings.filter(date=date)

    if price:
        bookings = bookings.filter(price__lte=price)

    return Response(list(bookings.values()))
 

