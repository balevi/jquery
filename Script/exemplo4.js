$(function(){
    $('#div0').css("height","200px").css("width","500px").css("margin","auto");
    var ex = $('#div1').css("background","blue").css("height","50px").css("width","500px").css("font-size","20px").css("color","white").css("margin","5px").css("text-align","center");
    $('#div2').css("background","black").css("height","50px").css("width","500px").css("font-size","20px").css("color","white").css("margin","5px").css("text-align","center")
    .click(function(){
        ex.hide(5000) //fast = mais rapido ou slow = devagar'
    });
    $('#div3').css("background","black").css("height","50px").css("width","500px").css("font-size","20px").css("color","white").css("margin","5px").css("text-align","center")
    .click(function(){
        ex.show(5000) //fast = mais rapido ou slow = devagar'
    });
    $('#div4').css("background","black").css("height","50px").css("width","500px").css("font-size","20px").css("color","white").css("margin","5px").css("text-align","center")
    .click(function(){
        ex.toggle('slow') //fast = mais rapido ou slow = devagar'
    });
    $('#div5').css("background","black").css("height","50px").css("width","500px").css("font-size","20px").css("color","white").css("margin","5px").css("text-align","center")
    .dblclick(function(){ // dois click para função
        ex.fadeTo('slow',0.5)
    });
    
});