from rest_framework.routers import DefaultRouter
from .api import CarViewSet

app_name = 'ceca'

router = DefaultRouter()

router.register(r'cars', CarViewSet, basename='cars')

urlpatterns = router.urls
