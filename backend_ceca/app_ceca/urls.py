from rest_framework.routers import DefaultRouter
from .api import UserViewSet, GroupViewSet

app_name = 'ceca'

router = DefaultRouter()

router.register(r'users', UserViewSet, basename='user')

urlpatterns = router.urls
