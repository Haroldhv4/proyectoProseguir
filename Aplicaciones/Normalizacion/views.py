from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Religion, Categoria, Sucursal, Convenio, LugarTrabajo, Departamento, Empleado

# Vista principal del proyecto
def home(request):
    return render(request, "index.html")

# Vista RELIGIÓN
def vista_religion(request):
    religionBdd = Religion.objects.values('Religion_ID', 'RELIGION').distinct()
    return render(request, "religion.html", {'religion': religionBdd})

def guardar_religion(request):
    nombre = request.POST["RELIGION"]
    nueva_religion = Religion.objects.create(RELIGION=nombre)
    messages.success(request, 'Religión Guardada exitosamente')
    return redirect('/vista_religion')

def eliminar_religion(request, id):
    religion = Religion.objects.get(Religion_ID=id)
    religion.delete()
    messages.success(request, 'Religión eliminada correctamente')
    return redirect('/vista_religion')

def editar_religion(request, id):
    religion = Religion.objects.get(Religion_ID=id)
    return render(request, 'editarReligion.html', {'religion': religion})

def procesar_actualizacion_religion(request):
    id = request.POST["Religion_ID"]
    nombre = request.POST["RELIGION"]
    religion = Religion.objects.get(Religion_ID=id)
    religion.RELIGION = nombre
    religion.save()
    messages.success(request, 'Religión Actualizada Exitosamente')
    return redirect('/vista_religion')

# Vista CATEGORÍA
def vista_categoria(request):
    categoriaBdd = Categoria.objects.values('Categoria_ID', 'Categoria', 'Cod_C', 'Costo', 'C_Costo').distinct()
    return render(request, "categoria.html", {'categoria': categoriaBdd})

def guardar_categoria(request):
    nombre = request.POST["Categoria"]
    cod = request.POST.get("Cod_C", '')
    costo = request.POST.get("Costo", None)
    c_costo = request.POST.get("C_Costo", '')
    nueva_categoria = Categoria.objects.create(
        Categoria=nombre, Cod_C=cod, Costo=costo, C_Costo=c_costo)
    messages.success(request, 'Categoría Guardada exitosamente')
    return redirect('/vista_categoria')

def eliminar_categoria(request, id):
    categoria = Categoria.objects.get(Categoria_ID=id)
    categoria.delete()
    messages.success(request, 'Categoría eliminada correctamente')
    return redirect('/vista_categoria')

def editar_categoria(request, id):
    categoria = Categoria.objects.get(Categoria_ID=id)
    return render(request, 'editarCategoria.html', {'categoria': categoria})

def procesar_actualizacion_categoria(request):
    id = request.POST["Categoria_ID"]
    nombre = request.POST["Categoria"]
    cod = request.POST.get("Cod_C", '')
    costo = request.POST.get("Costo", None)
    c_costo = request.POST.get("C_Costo", '')
    categoria = Categoria.objects.get(Categoria_ID=id)
    categoria.Categoria = nombre
    categoria.Cod_C = cod
    categoria.Costo = costo
    categoria.C_Costo = c_costo
    categoria.save()
    messages.success(request, 'Categoría Actualizada Exitosamente')
    return redirect('/vista_categoria')

# Vista SUCURSAL
def vista_sucursal(request):
    sucursalBdd = Sucursal.objects.values('Sucursal_ID','Sucursal','Nombre_oficina').distinct()
    return render(request, "sucursal.html", {'sucursal': sucursalBdd})

def guardar_sucursal(request):
    nombre = request.POST["Sucursal"]
    nombre_oficina = request.POST["Nombre_oficina"]
    nueva_sucursal = Sucursal.objects.create(
        Sucursal=nombre, Nombre_oficina=nombre_oficina)
    messages.success(request, 'Sucursal Guardada exitosamente')
    return redirect('/vista_sucursal')

def eliminar_sucursal(request, id):
    sucursal = Sucursal.objects.get(Sucursal_ID=id)
    sucursal.delete()
    messages.success(request, 'Sucursal eliminada correctamente')
    return redirect('/vista_sucursal')

def editar_sucursal(request, id):
    sucursal = Sucursal.objects.get(Sucursal_ID=id)
    return render(request, 'editarSucursal.html', {'sucursal': sucursal})

def procesar_actualizacion_sucursal(request):
    id = request.POST["Sucursal_ID"]
    nombre = request.POST["Sucursal"]
    nombre_oficina = request.POST["Nombre_oficina"]
    sucursal = Sucursal.objects.get(Sucursal_ID=id)
    sucursal.Sucursal = nombre
    sucursal.Nombre_oficina = nombre_oficina
    sucursal.save()
    messages.success(request, 'Sucursal Actualizada Exitosamente')
    return redirect('/vista_sucursal')

# Vista CONVENIO
def vista_convenio(request):
    convenioBdd = Convenio.objects.values('Convenio_ID','Nombre_del_convenio').distinct()
    return render(request, "convenio.html", {'convenio': convenioBdd})

def guardar_convenio(request):
    nombre = request.POST["Nombre_del_convenio"]
    convenio = int(request.POST["Convenio"])
    nuevo_convenio = Convenio.objects.create(
        Nombre_del_convenio=nombre, Convenio=convenio)
    messages.success(request, 'Convenio Guardado exitosamente')
    return redirect('/vista_convenio')

def eliminar_convenio(request, id):
    convenio = Convenio.objects.get(Convenio_ID=id)
    convenio.delete()
    messages.success(request, 'Convenio eliminado correctamente')
    return redirect('/vista_convenio')

def editar_convenio(request, id):
    convenio = Convenio.objects.get(Convenio_ID=id)
    return render(request, 'editarConvenio.html', {'convenio': convenio})

def procesar_actualizacion_convenio(request):
    id = request.POST["Convenio_ID"]
    nombre = request.POST["Nombre_del_convenio"]
    convenio = int(request.POST["Convenio"])
    convenio = Convenio.objects.get(Convenio_ID=id)
    convenio.Nombre_del_convenio = nombre
    convenio.Convenio = convenio
    convenio.save()
    messages.success(request, 'Convenio Actualizado Exitosamente')
    return redirect('/vista_convenio')

# Vista LUGAR DE TRABAJO
def vista_lugar_trabajo(request):
    lugar_trabajoBdd = LugarTrabajo.objects.values('Id_Lugar_Trabajo','Nombre_Lugar_Trabajo').distinct()
    return render(request, "trabajo.html", {'lugar_trabajo': lugar_trabajoBdd})

def guardar_lugar_trabajo(request):
    nombre = request.POST["Nombre_Lugar_Trabajo"]
    nuevo_lugar_trabajo = LugarTrabajo.objects.create(
        Nombre_Lugar_Trabajo=nombre)
    messages.success(request, 'Lugar de Trabajo Guardado exitosamente')
    return redirect('/vista_lugar_trabajo')

def eliminar_lugar_trabajo(request, id):
    lugar_trabajo = LugarTrabajo.objects.get(Id_Lugar_Trabajo=id)
    lugar_trabajo.delete()
    messages.success(request, 'Lugar de Trabajo eliminado correctamente')
    return redirect('/vista_lugar_trabajo')

def editar_lugar_trabajo(request, id):
    lugar_trabajo = LugarTrabajo.objects.get(Id_Lugar_Trabajo=id)
    return render(request, 'editarTrabajo.html', {'lugar_trabajo': lugar_trabajo})

def procesar_actualizacion_lugar_trabajo(request):
    id = request.POST["Id_Lugar_Trabajo"]
    nombre = request.POST["Nombre_Lugar_Trabajo"]
    lugar_trabajo = LugarTrabajo.objects.get(Id_Lugar_Trabajo=id)
    lugar_trabajo.Nombre_Lugar_Trabajo = nombre
    lugar_trabajo.save()
    messages.success(request, 'Lugar de Trabajo Actualizado Exitosamente')
    return redirect('/vista_lugar_trabajo')

# Vista DEPARTAMENTO
def vista_departamento(request):
    # Obtiene todos los departamentos asegurando que solo se devuelvan valores únicos
    departamentoBdd = Departamento.objects.values('Departamento_ID','Departamento').distinct()
    return render(request, "departamento.html", {'departamento': departamentoBdd})

def guardar_departamento(request):
    nombre = request.POST["Departamento"]
    nuevo_departamento = Departamento.objects.create(
        Departamento=nombre)
    messages.success(request, 'Departamento Guardado exitosamente')
    return redirect('/vista_departamento')

def eliminar_departamento(request, id):
    departamento = Departamento.objects.get(Departamento_ID=id)
    departamento.delete()
    messages.success(request, 'Departamento eliminado correctamente')
    return redirect('/vista_departamento')

def editar_departamento(request, id):
    departamento = Departamento.objects.get(Departamento_ID=id)
    return render(request, 'editarDepartamento.html', {'departamento': departamento})

def procesar_actualizacion_departamento(request):
    id = request.POST["Departamento_ID"]
    nombre = request.POST["Departamento"]
    departamento = Departamento.objects.get(Departamento_ID=id)
    departamento.Departamento = nombre
    departamento.save()
    messages.success(request, 'Departamento Actualizado Exitosamente')
    return redirect('/vista_departamento')

# Vista EMPLEADO
def vista_empleado(request):
    empleadoBdd = Empleado.objects.all()
    religionBdd = Religion.objects.all()
    categoriaBdd = Categoria.objects.all()
    sucursalBdd = Sucursal.objects.values('Sucursal').distinct()
    convenioBdd = Convenio.objects.all()
    lugar_trabajoBdd = LugarTrabajo.objects.all()
    departamentoBdd = Departamento.objects.all()
    
    return render(request, "empleado.html", {
        'empleado': empleadoBdd,
        'religion': religionBdd,
        'categoria': categoriaBdd,
        'sucursal': sucursalBdd,
        'convenio': convenioBdd,
        'lugar_trabajo': lugar_trabajoBdd,
        'departamento': departamentoBdd,
    })

def guardar_empleado(request):
    legajo = request.POST["Legajo"]
    apellido = request.POST["Apellido"]
    nombre = request.POST["Nombre"]
    t_doc = request.POST.get("T_doc", '')
    numero = request.POST.get("Numero", '')
    est_civil = request.POST.get("Est_Civil", '')
    edad = request.POST.get("Edad", None)
    fec_de_nac = request.POST.get("Fec_de_Nac", None)
    nacionalidad = request.POST.get("Nacionalidad", '')
    religion = int(request.POST["Religion"])
    categoria = int(request.POST["Categoria"])
    sucursal = int(request.POST["Sucursal"])
    convenio = int(request.POST["Convenio"])
    lugar_trabajo = int(request.POST["Lugar_Trabajo"])
    departamento = int(request.POST["Departamento"])

    nuevo_empleado = Empleado.objects.create(
        Legajo=legajo, Apellido=apellido, Nombre=nombre, T_doc=t_doc,
        Numero=numero, Est_Civil=est_civil, Edad=edad, Fec_de_Nac=fec_de_nac,
        Nacionalidad=nacionalidad, Religion_id=religion, Categoria_id=categoria,
        Sucursal_id=sucursal, Convenio_id=convenio, Lugar_Trabajo_id=lugar_trabajo,
        Departamento_id=departamento
    )
    messages.success(request, 'Empleado Guardado exitosamente')
    return redirect('/vista_empleado')

def eliminar_empleado(request, id):
    empleado = Empleado.objects.get(Legajo=id)
    empleado.delete()
    messages.success(request, 'Empleado eliminado correctamente')
    return redirect('/vista_empleado')

def editar_empleado(request, id):
    empleado = Empleado.objects.get(Legajo=id)
    religionBdd = Religion.objects.all()
    categoriaBdd = Categoria.objects.all()
    sucursalBdd = Sucursal.objects.all()
    convenioBdd = Convenio.objects.all()
    lugar_trabajoBdd = LugarTrabajo.objects.all()
    departamentoBdd = Departamento.objects.all()
    return render(request, 'editarEmpleado.html', {
        'empleado': empleado,
        'religion': religionBdd,
        'categoria': categoriaBdd,
        'sucursal': sucursalBdd,
        'convenio': convenioBdd,
        'lugar_trabajo': lugar_trabajoBdd,
        'departamento': departamentoBdd,
    })

def procesar_actualizacion_empleado(request):
    legajo = request.POST["Legajo"]
    apellido = request.POST["Apellido"]
    nombre = request.POST["Nombre"]
    t_doc = request.POST.get("T_doc", '')
    numero = request.POST.get("Numero", '')
    est_civil = request.POST.get("Est_Civil", '')
    edad = request.POST.get("Edad", None)
    fec_de_nac = request.POST.get("Fec_de_Nac", None)
    nacionalidad = request.POST.get("Nacionalidad", '')
    religion = int(request.POST["Religion"])
    categoria = int(request.POST["Categoria"])
    sucursal = int(request.POST["Sucursal"])
    convenio = int(request.POST["Convenio"])
    lugar_trabajo = int(request.POST["Lugar_Trabajo"])
    departamento = int(request.POST["Departamento"])

    empleado = Empleado.objects.get(Legajo=legajo)
    empleado.Apellido = apellido
    empleado.Nombre = nombre
    empleado.T_doc = t_doc
    empleado.Numero = numero
    empleado.Est_Civil = est_civil
    empleado.Edad = edad
    empleado.Fec_de_Nac = fec_de_nac
    empleado.Nacionalidad = nacionalidad
    empleado.Religion_id = religion
    empleado.Categoria_id = categoria
    empleado.Sucursal_id = sucursal
    empleado.Convenio_id = convenio
    empleado.Lugar_Trabajo_id = lugar_trabajo
    empleado.Departamento_id = departamento
    empleado.save()
    messages.success(request, 'Empleado Actualizado Exitosamente')
    return redirect('/vista_empleado')

