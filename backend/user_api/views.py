from rest_framework import viewsets
from .serializer import MiembroSerializer
from .models import Miembro

class VistaMiembro(viewsets.ModelViewSet):
    serializer_class = MiembroSerializer
    queryset = Miembro.objects.all()
