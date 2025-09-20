$(document).ready(function(){
    $("#btn_largo").click(function(){
        let nombre = $("#txtNombre").val();
        let largo = nombre.length;
        $("#pResultado").text("El nombre "+nombre+" posee "+largo+" caracteres");
    });
    $("#btn_promedio").click(function(){
        let resultado = "";
        let suma = (parseInt($("#txtNota1").val())
        +parseInt($("#txtNota2").val())
        +parseInt($("#txtNota3").val()))/3;
        
        if(suma>=70){
            resultado = "aprobado";
        }else{
            resultado = "reprobado";
        }
        $("#pResultado").text("El promedio es de: "+suma+". El alumno fue " +resultado);
    });
});