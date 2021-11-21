from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from django.db.models import Q

from .models import Car
from .serializers import CarSerializer


class CarViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Car.objects.all()
    serializer_class = CarSerializer

    @action(detail=False, methods=['GET'], url_path="filter_cars", url_name="filter_cars")
    def filter_cars(self, request):
        search = request.GET.get('search', '')
        cars_filtereds = Car.objects.filter(
            Q(plate__icontains=search) | Q(name__icontains=search))

        serializer_response = CarSerializer(cars_filtereds, many=True)
        return Response(serializer_response.data, status=status.HTTP_200_OK)
