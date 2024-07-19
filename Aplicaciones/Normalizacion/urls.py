from django.urls import path
from . import views

urlpatterns = [
    # Vistas generales
    path('', views.home, name='home'),

    # URLs para Religion
    path('vista_religion/', views.vista_religion, name='vista_religion'),
    path('guardar_religion/', views.guardar_religion, name='guardar_religion'),
    path('eliminar_religion/<int:id>/', views.eliminar_religion, name='eliminar_religion'),
    path('editar_religion/<int:id>/', views.editar_religion, name='editar_religion'),
    path('procesar_actualizacion_religion/', views.procesar_actualizacion_religion, name='procesar_actualizacion_religion'),

    # URLs para Categoria
    path('vista_categoria/', views.vista_categoria, name='vista_categoria'),
    path('guardar_categoria/', views.guardar_categoria, name='guardar_categoria'),
    path('eliminar_categoria/<int:id>/', views.eliminar_categoria, name='eliminar_categoria'),
    path('editar_categoria/<int:id>/', views.editar_categoria, name='editar_categoria'),
    path('procesar_actualizacion_categoria/', views.procesar_actualizacion_categoria, name='procesar_actualizacion_categoria'),

    # URLs para Sucursal
    path('vista_sucursal/', views.vista_sucursal, name='vista_sucursal'),
    path('guardar_sucursal/', views.guardar_sucursal, name='guardar_sucursal'),
    path('eliminar_sucursal/<int:id>/', views.eliminar_sucursal, name='eliminar_sucursal'),
    path('editar_sucursal/<int:id>/', views.editar_sucursal, name='editar_sucursal'),
    path('procesar_actualizacion_sucursal/', views.procesar_actualizacion_sucursal, name='procesar_actualizacion_sucursal'),

    # URLs para Convenio
    path('vista_convenio/', views.vista_convenio, name='vista_convenio'),
    path('guardar_convenio/', views.guardar_convenio, name='guardar_convenio'),
    path('eliminar_convenio/<int:id>/', views.eliminar_convenio, name='eliminar_convenio'),
    path('editar_convenio/<int:id>/', views.editar_convenio, name='editar_convenio'),
    path('procesar_actualizacion_convenio/', views.procesar_actualizacion_convenio, name='procesar_actualizacion_convenio'),

    # URLs para Lugar de Trabajo
    path('vista_lugar_trabajo/', views.vista_lugar_trabajo, name='vista_lugar_trabajo'),
    path('guardar_lugar_trabajo/', views.guardar_lugar_trabajo, name='guardar_lugar_trabajo'),
    path('eliminar_lugar_trabajo/<int:id>/', views.eliminar_lugar_trabajo, name='eliminar_lugar_trabajo'),
    path('editar_lugar_trabajo/<int:id>/', views.editar_lugar_trabajo, name='editar_lugar_trabajo'),
    path('procesar_actualizacion_lugar_trabajo/', views.procesar_actualizacion_lugar_trabajo, name='procesar_actualizacion_lugar_trabajo'),

    # URLs para Departamento
    path('vista_departamento/', views.vista_departamento, name='vista_departamento'),
    path('guardar_departamento/', views.guardar_departamento, name='guardar_departamento'),
    path('eliminar_departamento/<int:id>/', views.eliminar_departamento, name='eliminar_departamento'),
    path('editar_departamento/<int:id>/', views.editar_departamento, name='editar_departamento'),
    path('procesar_actualizacion_departamento/', views.procesar_actualizacion_departamento, name='procesar_actualizacion_departamento'),

    # URLs para Empleado
    path('vista_empleado/', views.vista_empleado, name='vista_empleado'),
    path('guardar_empleado/', views.guardar_empleado, name='guardar_empleado'),
    path('eliminar_empleado/<int:id>/', views.eliminar_empleado, name='eliminar_empleado'),
    path('editar_empleado/<int:id>/', views.editar_empleado, name='editar_empleado'),
    path('procesar_actualizacion_empleado/', views.procesar_actualizacion_empleado, name='procesar_actualizacion_empleado'),
]
