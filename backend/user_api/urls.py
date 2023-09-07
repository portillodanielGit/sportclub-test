from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from user_api import views
# api versioning

router = routers.DefaultRouter()
router.register(r'miembros', views.VistaMiembro)
urlpatterns = [
    path("v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="user_api"))
]