from django.db import models

class Religion(models.Model):
    Religion_ID = models.AutoField(primary_key=True)
    RELIGION = models.CharField(max_length=50)

class Categoria(models.Model):
    Categoria_ID = models.AutoField(primary_key=True)
    Categoria = models.CharField(max_length=100)
    Cod_C = models.CharField(max_length=20, null=True, blank=True)
    Costo = models.IntegerField(null=True, blank=True)
    C_Costo = models.CharField(max_length=100, null=True, blank=True)

class Sucursal(models.Model):
    Sucursal_ID = models.AutoField(primary_key=True)
    Sucursal = models.CharField(max_length=50)
    Nombre_oficina = models.CharField(max_length=100)

class Convenio(models.Model):
    Convenio_ID = models.AutoField(primary_key=True)
    Convenio = models.IntegerField()
    Nombre_del_convenio = models.CharField(max_length=100)

class LugarTrabajo(models.Model):
    Id_Lugar_Trabajo = models.AutoField(primary_key=True)
    Nombre_Lugar_Trabajo = models.CharField(max_length=100)

class Departamento(models.Model):
    Departamento_ID = models.AutoField(primary_key=True)
    Departamento = models.CharField(max_length=100)

class Empleado(models.Model):
    Legajo = models.IntegerField(primary_key=True)
    Apellido = models.CharField(max_length=100)
    Nombre = models.CharField(max_length=100)
    T_doc = models.CharField(max_length=20, null=True, blank=True)
    Numero = models.CharField(max_length=20, null=True, blank=True)
    Est_Civil = models.CharField(max_length=20, null=True, blank=True)
    Edad = models.IntegerField(null=True, blank=True)
    Fec_de_Nac = models.DateField(null=True, blank=True)
    Nacionalidad = models.CharField(max_length=50, null=True, blank=True)
    Religion = models.ForeignKey(Religion, on_delete=models.CASCADE)
    Categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    Sucursal = models.ForeignKey(Sucursal, on_delete=models.CASCADE)
    Convenio = models.ForeignKey(Convenio, on_delete=models.CASCADE)
    Lugar_Trabajo = models.ForeignKey(LugarTrabajo, on_delete=models.CASCADE)
    Departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE)
