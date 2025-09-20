//cuando el documento este listo
$(document).ready(function(){
    //código (variables, métodos, etc de jquery)
    $("#btn_mostrar").click(function(){
        $("p").show();
    });
    $("#btn_ocultar").click(function(){
        $("p").hide();
        $("#p7").show();
    });
    $("#btn_mostrar_despacio").click(function(){
        //.show("slow") o colocar tiempo en milisegundos
        //1000 = 1 segundo
        $("p").show(3000);
    });
    $("#btn_ocultar_despacio").click(function(){
        $("p").hide("slow");
        $("#p7").show("slow");
    });
    $("#btn_mostrar_rapido").click(function(){
        $("p").show(100);
    });
    $("#btn_ocultar_rapido").click(function(){
        $("p").hide("fast");
    });
    $("#btn_ocultar_slide").click(function(){
        $("p").slideUp(2000);
    });
    $("#btn_mostrar_slide").click(function(){
        $("p").slideDown(2000);
    });
    $("#btn_slide_toggle").click(function(){
        $("p").slideToggle();
        $("#p7").show(500);
        $("#p7").text("Este elemento no se oculto");
        let suma = parseFloat($("#txtNumero").val())+100;
        $("#p7").text("La suma de "
        + $("#txtNumero").val() + " + 100 es: "
        + suma);
    });
});