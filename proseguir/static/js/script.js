// Script para la eliminación de empleados
function eliminarEmpleado(url){
    iziToast.question({
        timeout: 15000,
        close: true,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'CONFIRMACIÓN',
        message: '¿Está seguro de eliminar el <h1>Empleado</h1> seleccionado?',
        position: 'center',
        buttons: [
            ['<button><b>SI</b></button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                window.location.href = url;
            }, true],
            ['<button>NO</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }],
        ]
    });
}
// Función para la eliminación de departamentos con iziToast
function eliminarDepartamento(url) {
    iziToast.question({
        timeout: 15000,
        close: true,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'CONFIRMACIÓN',
        message: '¿Está seguro de eliminar el <h1>Departamento</h1> seleccionado?',
        position: 'center',
        buttons: [
            ['<button><b>SI</b></button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                window.location.href = url;
            }, true],
            ['<button>NO</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }],
        ]
    });
}
// Función para la eliminación de lugar de trabajo con iziToast
function eliminarLugarTrabajo(url) {
    iziToast.question({
        timeout: 15000,
        close: true,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'CONFIRMACIÓN',
        message: '¿Está seguro de eliminar el <h1>Lugar de Trabajo</h1> seleccionado?',
        position: 'center',
        buttons: [
            ['<button><b>SI</b></button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                window.location.href = url;
            }, true],
            ['<button>NO</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }],
        ]
    });
}
// Función para la eliminación de convenio con iziToast
function eliminarConvenio(url) {
    iziToast.question({
        timeout: 15000,
        close: true,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'CONFIRMACIÓN',
        message: '¿Está seguro de eliminar el <h1>Convenio</h1> seleccionado?',
        position: 'center',
        buttons: [
            ['<button><b>SI</b></button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                window.location.href = url;
            }, true],
            ['<button>NO</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }],
        ]
    });
}
// Función para la eliminación de sucursal con iziToast
function eliminarSucursal(url) {
    iziToast.question({
        timeout: 15000,
        close: true,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'CONFIRMACIÓN',
        message: '¿Está seguro de eliminar la <h1>Sucursal</h1> seleccionada?',
        position: 'center',
        buttons: [
            ['<button><b>SI</b></button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                window.location.href = url;
            }, true],
            ['<button>NO</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }],
        ]
    });
}
// Función para la eliminación de categoría con iziToast
function eliminarCategoria(url) {
    iziToast.question({
        timeout: 15000,
        close: true,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'CONFIRMACIÓN',
        message: '¿Está seguro de eliminar la <h1>Categoría</h1> seleccionada?',
        position: 'center',
        buttons: [
            ['<button><b>SI</b></button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                window.location.href = url;
            }, true],
            ['<button>NO</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }],
        ]
    });
}
// Función para la eliminación de religión con iziToast
function eliminarReligion(url) {
    iziToast.question({
        timeout: 15000,
        close: true,
        overlay: true,
        displayMode: 'once',
        id: 'question',
        zindex: 999,
        title: 'CONFIRMACIÓN',
        message: '¿Está seguro de eliminar la <h1>Religión</h1> seleccionada?',
        position: 'center',
        buttons: [
            ['<button><b>SI</b></button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                window.location.href = url;
            }, true],
            ['<button>NO</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }],
        ]
    });
}
//Funcion para validar el formulario de religion
$(document).ready(function () {
    $.validator.addMethod("lettersOnly", function (value, element) {
        return this.optional(element) || /^[A-Za-z\s]+$/.test(value);
    }, "Solo se permiten letras y espacios");

    $("#frm_nueva_religion").validate({
        rules: {
            "RELIGION": {
                required: true,
                minlength: 4,
                maxlength: 10,
                lettersOnly: true // Usar el método personalizado
            }
        },
        messages: {
            "RELIGION": {
                required: "Debe ingresar una religión",
                minlength: "La religión debe tener al menos 4 caracteres",
                maxlength: "La religión no debe exceder los 10 caracteres",
                lettersOnly: "Solo se permiten letras y espacios"
            }
        }
    });
});
//FUNCION para validar el formulario de categoria
$(document).ready(function () {
    // Agregar método personalizado para letras y espacios
    $.validator.addMethod("lettersOnly", function (value, element) {
        return this.optional(element) || /^[A-Za-z\s]+$/.test(value);
    }, "Solo se permiten letras y espacios");

    // Agregar método personalizado para letras y números
    $.validator.addMethod("lettersAndNumbers", function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
    }, "Solo se permiten letras y números");

    // Agregar método personalizado para números positivos
    $.validator.addMethod("positiveNumber", function (value, element) {
        return this.optional(element) || /^[0-9]+(\.[0-9]+)?$/.test(value);
    }, "Ingrese un número positivo");

    $("#frm_nueva_categoria").validate({
        rules: {
            "Categoria": {
                required: true,
                minlength: 3,
                maxlength: 50,
                lettersOnly: true
            },
            "Cod_C": {
                required: true,
                minlength: 1,
                maxlength: 10,
                lettersAndNumbers: true
            },
            "Costo": {
                required: true,
                positiveNumber: true
            },
            "C_Costo": {
                required: false,
                maxlength: 50,
                lettersOnly: true
            }
        },
        messages: {
            "Categoria": {
                required: "Debe ingresar una categoría",
                minlength: "La categoría debe tener al menos 3 caracteres",
                maxlength: "La categoría no debe exceder los 50 caracteres",
                lettersOnly: "Solo se permiten letras y espacios"
            },
            "Cod_C": {
                required: "Debe ingresar un código",
                minlength: "El código debe tener al menos 1 carácter",
                maxlength: "El código no debe exceder los 10 caracteres",
                lettersAndNumbers: "Solo se permiten letras y números"
            },
            "Costo": {
                required: "Debe ingresar un costo",
                positiveNumber: "Ingrese un número positivo"
            },
            "C_Costo": {
                maxlength: "El centro de costo no debe exceder los 50 caracteres",
                lettersOnly: "Solo se permiten letras y espacios"
            }
        }
    });
});
//Funcion para validar el formulario de sucursal
$(document).ready(function () {
    // Agregar método personalizado para letras y espacios
    $.validator.addMethod("lettersOnly", function (value, element) {
        return this.optional(element) || /^[A-Za-z\s]+$/.test(value);
    }, "Solo se permiten letras y espacios");

    // Validar el formulario
    $("#frm_nueva_sucursal").validate({
        rules: {
            "Sucursal": {
                required: true,
                minlength: 3,
                maxlength: 50,
                lettersOnly: true
            },
            "Nombre_oficina": {
                required: true,
                minlength: 3,
                maxlength: 50,
                lettersOnly: true
            }
        },
        messages: {
            "Sucursal": {
                required: "Debe ingresar una sucursal",
                minlength: "La sucursal debe tener al menos 3 caracteres",
                maxlength: "La sucursal no debe exceder los 50 caracteres",
                lettersOnly: "Solo se permiten letras y espacios"
            },
            "Nombre_oficina": {
                required: "Debe ingresar el nombre de la oficina",
                minlength: "El nombre de la oficina debe tener al menos 3 caracteres",
                maxlength: "El nombre de la oficina no debe exceder los 50 caracteres",
                lettersOnly: "Solo se permiten letras y espacios"
            }
        }
    });
});
//Funcion para validar el formulario de convenio
$(document).ready(function () {
    // Agregar método personalizado para letras y números
    $.validator.addMethod("lettersAndNumbers", function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9\s]+$/.test(value);
    }, "Solo se permiten letras, números y espacios");
    // Agregar método personalizado para números positivos
    $.validator.addMethod("positiveNumber", function (value, element) {
        return this.optional(element) || /^[0-9]+(\.[0-9]+)?$/.test(value);
    }, "Ingrese un número positivo");

    // Validar el formulario
    $("#frm_nuevo_convenio").validate({
        rules: {
            "Nombre_del_convenio": {
                required: true,
                minlength: 3,
                maxlength: 100,
                lettersAndNumbers: true
            },
            "Convenio": {
                required: true,
                digits: true,
                positiveNumber: true
            }
        },
        messages: {
            "Nombre_del_convenio": {
                required: "Debe ingresar el nombre del convenio",
                minlength: "El nombre del convenio debe tener al menos 3 caracteres",
                maxlength: "El nombre del convenio no debe exceder los 100 caracteres",
                lettersAndNumbers: "Solo se permiten letras, números y espacios"
            },
            "Convenio": {
                required: "Debe ingresar el código del convenio",
                digits: "El código del convenio debe ser un número entero",
                positiveNumber: "Debe ingresar numeros positivos"
            }
        }
    });
});
//Funcion para validar el formulario de lugar de trabajo
$(document).ready(function () {
    // Agregar método personalizado para letras y números
    $.validator.addMethod("lettersAndSpaces", function (value, element) {
        return this.optional(element) || /^[A-Za-z\s]+$/.test(value);
    }, "Solo se permiten letras y espacios");

    // Validar el formulario
    $("#frm_nuevo_lugar_trabajo").validate({
        rules: {
            "Nombre_Lugar_Trabajo": {
                required: true,
                minlength: 3,
                maxlength: 100,
                lettersAndSpaces: true
            }
        },
        messages: {
            "Nombre_Lugar_Trabajo": {
                required: "Debe ingresar el nombre del lugar de trabajo",
                minlength: "El nombre del lugar de trabajo debe tener al menos 3 caracteres",
                maxlength: "El nombre del lugar de trabajo no debe exceder los 100 caracteres",
                lettersAndSpaces: "Solo se permiten letras y espacios"
            }
        }
    });
});
//Funcion para validar el formulario de departamentos
$(document).ready(function () {
    // Agregar método personalizado para letras y espacios
    $.validator.addMethod("lettersAndSpaces", function (value, element) {
        return this.optional(element) || /^[A-Za-z\s]+$/.test(value);
    }, "Solo se permiten letras y espacios");

    // Validar el formulario
    $("#frm_nuevo_departamento").validate({
        rules: {
            "Departamento": {
                required: true,
                minlength: 3,
                maxlength: 100,
                lettersAndSpaces: true
            }
        },
        messages: {
            "Departamento": {
                required: "Debe ingresar el nombre del departamento",
                minlength: "El nombre del departamento debe tener al menos 3 caracteres",
                maxlength: "El nombre del departamento no debe exceder los 100 caracteres",
                lettersAndSpaces: "Solo se permiten letras y espacios"
            }
        }
    });
});
//Funcion para validar el formulario de empleado
$(document).ready(function () {
    // Agregar método personalizado para letras y espacios
    $.validator.addMethod("lettersAndSpaces", function (value, element) {
        return this.optional(element) || /^[A-Za-z\s]+$/.test(value);
    }, "Solo se permiten letras y espacios");

    // Validar el formulario
    $("#frm_nuevo_empleado").validate({
        rules: {
            "Legajo": {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 10
            },
            "Apellido": {
                required: true,
                minlength: 2,
                maxlength: 50,
                lettersAndSpaces: true
            },
            "Nombre": {
                required: true,
                minlength: 2,
                maxlength: 50,
                lettersAndSpaces: true
            },
            "T_doc": {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            "Numero": {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 20
            },
            "Est_Civil": {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            "Edad": {
                required: true,
                number: true,
                min: 0,
                max: 150
            },
            "Fec_de_Nac": {
                required: true,
                dateISO: true
            },
            "Nacionalidad": {
                required: true,
                minlength: 2,
                maxlength: 50
            },
            "Religion": {
                required: true
            },
            "Categoria": {
                required: true
            },
            "Sucursal": {
                required: true
            },
            "Convenio": {
                required: true
            },
            "Lugar_Trabajo": {
                required: true
            },
            "Departamento": {
                required: true
            }
        },
        messages: {
            "Legajo": {
                required: "Debe ingresar el legajo",
                digits: "Solo se permiten dígitos",
                minlength: "El legajo debe tener al menos 1 dígito",
                maxlength: "El legajo no debe exceder los 10 dígitos"
            },
            "Apellido": {
                required: "Debe ingresar el apellido",
                minlength: "El apellido debe tener al menos 2 caracteres",
                maxlength: "El apellido no debe exceder los 50 caracteres",
                lettersAndSpaces: "Solo se permiten letras y espacios"
            },
            "Nombre": {
                required: "Debe ingresar el nombre",
                minlength: "El nombre debe tener al menos 2 caracteres",
                maxlength: "El nombre no debe exceder los 50 caracteres",
                lettersAndSpaces: "Solo se permiten letras y espacios"
            },
            "T_doc": {
                required: "Debe ingresar el tipo de documento",
                minlength: "El tipo de documento debe tener al menos 2 caracteres",
                maxlength: "El tipo de documento no debe exceder los 20 caracteres"
            },
            "Numero": {
                required: "Debe ingresar el número de documento",
                digits: "Solo se permiten dígitos",
                minlength: "El número de documento debe tener al menos 1 dígito",
                maxlength: "El número de documento no debe exceder los 20 dígitos"
            },
            "Est_Civil": {
                required: "Debe ingresar el estado civil",
                minlength: "El estado civil debe tener al menos 2 caracteres",
                maxlength: "El estado civil no debe exceder los 20 caracteres"
            },
            "Edad": {
                required: "Debe ingresar la edad",
                number: "Debe ingresar un número válido",
                min: "La edad no puede ser negativa",
                max: "La edad no puede exceder los 150 años"
            },
            "Fec_de_Nac": {
                required: "Debe ingresar la fecha de nacimiento",
                dateISO: "Debe ingresar una fecha válida (YYYY-MM-DD)"
            },
            "Nacionalidad": {
                required: "Debe ingresar la nacionalidad",
                minlength: "La nacionalidad debe tener al menos 2 caracteres",
                maxlength: "La nacionalidad no debe exceder los 50 caracteres"
            },
            "Religion": {
                required: "Debe seleccionar una religión"
            },
            "Categoria": {
                required: "Debe seleccionar una categoría"
            },
            "Sucursal": {
                required: "Debe seleccionar una sucursal"
            },
            "Convenio": {
                required: "Debe seleccionar un convenio"
            },
            "Lugar_Trabajo": {
                required: "Debe seleccionar un lugar de trabajo"
            },
            "Departamento": {
                required: "Debe seleccionar un departamento"
            }
        }
    });
          $('#tbl_religiones').DataTable({
            language: {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "sInfoThousands": ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                },
                "buttons": {
                    "copy": "Copiar",
                    "colvis": "Visibilidad",
                    "print": "Imprimir"
                }
            },
              dom: 'Bfrtip',
              buttons: [
                  {
                      extend: 'pdfHtml5',
                      messageTop: 'REPORTE DE RELIGIONES - DJANGO Y DATATABLES'
                  },
                  'print',
                  'csv'
              ]
          });

                $('#tbl_categorias').DataTable({
                  language: {
                      "sProcessing": "Procesando...",
                      "sLengthMenu": "Mostrar _MENU_ registros",
                      "sZeroRecords": "No se encontraron resultados",
                      "sEmptyTable": "Ningún dato disponible en esta tabla",
                      "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                      "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                      "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                      "sInfoPostFix": "",
                      "sSearch": "Buscar:",
                      "sUrl": "",
                      "sInfoThousands": ",",
                      "sLoadingRecords": "Cargando...",
                      "oPaginate": {
                          "sFirst": "Primero",
                          "sLast": "Último",
                          "sNext": "Siguiente",
                          "sPrevious": "Anterior"
                      },
                      "oAria": {
                          "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                      },
                      "buttons": {
                          "copy": "Copiar",
                          "colvis": "Visibilidad",
                          "print": "Imprimir"
                      }
                  },
                    dom: 'Bfrtip',
                    buttons: [
                        {
                            extend: 'pdfHtml5',
                            messageTop: 'REPORTE DE CATEGORIAS - DJANGO Y DATATABLES'
                        },
                        'print',
                        'csv'
                    ]
                });
                      $('#tbl_sucursales').DataTable({
                        language: {
                            "sProcessing": "Procesando...",
                            "sLengthMenu": "Mostrar _MENU_ registros",
                            "sZeroRecords": "No se encontraron resultados",
                            "sEmptyTable": "Ningún dato disponible en esta tabla",
                            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                            "sInfoPostFix": "",
                            "sSearch": "Buscar:",
                            "sUrl": "",
                            "sInfoThousands": ",",
                            "sLoadingRecords": "Cargando...",
                            "oPaginate": {
                                "sFirst": "Primero",
                                "sLast": "Último",
                                "sNext": "Siguiente",
                                "sPrevious": "Anterior"
                            },
                            "oAria": {
                                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                            },
                            "buttons": {
                                "copy": "Copiar",
                                "colvis": "Visibilidad",
                                "print": "Imprimir"
                            }
                        },
                          dom: 'Bfrtip',
                          buttons: [
                              {
                                  extend: 'pdfHtml5',
                                  messageTop: 'REPORTE DE SUCURSALES - DJANGO Y DATATABLES'
                              },
                              'print',
                              'csv'
                          ]
                      });
                            $('#tbl_convenios').DataTable({
                              language: {
                                  "sProcessing": "Procesando...",
                                  "sLengthMenu": "Mostrar _MENU_ registros",
                                  "sZeroRecords": "No se encontraron resultados",
                                  "sEmptyTable": "Ningún dato disponible en esta tabla",
                                  "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                                  "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                                  "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                                  "sInfoPostFix": "",
                                  "sSearch": "Buscar:",
                                  "sUrl": "",
                                  "sInfoThousands": ",",
                                  "sLoadingRecords": "Cargando...",
                                  "oPaginate": {
                                      "sFirst": "Primero",
                                      "sLast": "Último",
                                      "sNext": "Siguiente",
                                      "sPrevious": "Anterior"
                                  },
                                  "oAria": {
                                      "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                                      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                                  },
                                  "buttons": {
                                      "copy": "Copiar",
                                      "colvis": "Visibilidad",
                                      "print": "Imprimir"
                                  }
                              },
                                dom: 'Bfrtip',
                                buttons: [
                                    {
                                        extend: 'pdfHtml5',
                                        messageTop: 'REPORTE DE CONVENIOS - DJANGO Y DATATABLES'
                                    },
                                    'print',
                                    'csv'
                                ]
                            });

                                                    $('#tbl_lugares_trabajo').DataTable({
                                                      language: {
                                                          "sProcessing": "Procesando...",
                                                          "sLengthMenu": "Mostrar _MENU_ registros",
                                                          "sZeroRecords": "No se encontraron resultados",
                                                          "sEmptyTable": "Ningún dato disponible en esta tabla",
                                                          "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                                                          "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                                                          "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                                                          "sInfoPostFix": "",
                                                          "sSearch": "Buscar:",
                                                          "sUrl": "",
                                                          "sInfoThousands": ",",
                                                          "sLoadingRecords": "Cargando...",
                                                          "oPaginate": {
                                                              "sFirst": "Primero",
                                                              "sLast": "Último",
                                                              "sNext": "Siguiente",
                                                              "sPrevious": "Anterior"
                                                          },
                                                          "oAria": {
                                                              "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                                                              "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                                                          },
                                                          "buttons": {
                                                              "copy": "Copiar",
                                                              "colvis": "Visibilidad",
                                                              "print": "Imprimir"
                                                          }
                                                      },
                                                        dom: 'Bfrtip',
                                                        buttons: [
                                                            {
                                                                extend: 'pdfHtml5',
                                                                messageTop: 'REPORTE DE LUGARES DE TRABAJO - DJANGO Y DATATABLES'
                                                            },
                                                            'print',
                                                            'csv'
                                                        ]
                                                    });
                                                                         $('#tbl_departamentos').DataTable({
                                                                              language: {
                                                                                  "sProcessing": "Procesando...",
                                                                                  "sLengthMenu": "Mostrar _MENU_ registros",
                                                                                  "sZeroRecords": "No se encontraron resultados",
                                                                                  "sEmptyTable": "Ningún dato disponible en esta tabla",
                                                                                  "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                                                                                  "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                                                                                  "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                                                                                  "sInfoPostFix": "",
                                                                                  "sSearch": "Buscar:",
                                                                                  "sUrl": "",
                                                                                  "sInfoThousands": ",",
                                                                                  "sLoadingRecords": "Cargando...",
                                                                                  "oPaginate": {
                                                                                      "sFirst": "Primero",
                                                                                      "sLast": "Último",
                                                                                      "sNext": "Siguiente",
                                                                                      "sPrevious": "Anterior"
                                                                                  },
                                                                                  "oAria": {
                                                                                      "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                                                                                      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                                                                                  },
                                                                                  "buttons": {
                                                                                      "copy": "Copiar",
                                                                                      "colvis": "Visibilidad",
                                                                                      "print": "Imprimir"
                                                                                  }
                                                                              },
                                                                                dom: 'Bfrtip',
                                                                                buttons: [
                                                                                    {
                                                                                        extend: 'pdfHtml5',
                                                                                        messageTop: 'REPORTE DE DEPARTAMENTOS - DJANGO Y DATATABLES'
                                                                                    },
                                                                                    'print',
                                                                                    'csv'
                                                                                ]
                                                                            });
                                                                                                    $('#tbl_empleados').DataTable({
                                                                                                      language: {
                                                                                                          "sProcessing": "Procesando...",
                                                                                                          "sLengthMenu": "Mostrar _MENU_ registros",
                                                                                                          "sZeroRecords": "No se encontraron resultados",
                                                                                                          "sEmptyTable": "Ningún dato disponible en esta tabla",
                                                                                                          "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                                                                                                          "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                                                                                                          "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                                                                                                          "sInfoPostFix": "",
                                                                                                          "sSearch": "Buscar:",
                                                                                                          "sUrl": "",
                                                                                                          "sInfoThousands": ",",
                                                                                                          "sLoadingRecords": "Cargando...",
                                                                                                          "oPaginate": {
                                                                                                              "sFirst": "Primero",
                                                                                                              "sLast": "Último",
                                                                                                              "sNext": "Siguiente",
                                                                                                              "sPrevious": "Anterior"
                                                                                                          },
                                                                                                          "oAria": {
                                                                                                              "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                                                                                                              "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                                                                                                          },
                                                                                                          "buttons": {
                                                                                                              "copy": "Copiar",
                                                                                                              "colvis": "Visibilidad",
                                                                                                              "print": "Imprimir"
                                                                                                          }
                                                                                                      },
                                                                                                        dom: 'Bfrtip',
                                                                                                        buttons: [
                                                                                                            {
                                                                                                                extend: 'pdfHtml5',
                                                                                                                messageTop: 'REPORTE DE EMPLEADOS - DJANGO Y DATATABLES'
                                                                                                            },
                                                                                                            'print',
                                                                                                            'csv'
                                                                                                        ]
                                                                                                    });
                                                                                                });
                                                                                               