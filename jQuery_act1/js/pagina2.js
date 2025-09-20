$(document).ready(function(){
    $("#btn_agregar").click(function(){
        $("#tabla").append(
            "<tr><td>2024-0004</td><td>Estudiante Nuevo</td><td>nuevo@micorreo.com.gt</td></tr>"
        );
    });
    $("#btn_eliminar").click(function(){
        $("#tabla_cuerpo tr:eq(3)").remove();
    })
});