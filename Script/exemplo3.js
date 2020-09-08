$(function(){
    /*  verifica se imagem estiver com algum erro de endereço e coloca outra definida
    $('img').on("error",function(){
        $(this).attr("src","img/negativo.jpg");

    });
    */ 

    // maneira de sumir imagem e aparece a depender da rolagem do scroll
    $('body').css("height","5000px");
    $(window).scroll(function(){
        var topo = $(window).scrollTop();
        if(topo>50){
            $('img').fadeOut('1000');
        } else{
            $('img').fadeIn('1000');
        }
    
    });
});