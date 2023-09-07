from django.db import models

# Create your models here.
class Miembro(models.Model):
    dni = models.IntegerField()
    nombre=models.CharField(max_length = 200)
    apellido=models.CharField(max_length = 200)
    fecha_de_nacimiento=models.DateField()
    gba=models.BooleanField(default=False)
    
    def __str__(self):
        return self.dni,self.nombre,self.apellido
    
