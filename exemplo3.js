$(function(){

    $('img').on("error",function(){
        $(this).attr("src","img/negativo.jpg");

    });
});