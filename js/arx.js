function show(){
    var x = document.getElementById("pass")
    var y = document.getElementById("hide1")
    var z = document.getElementById("hide2")
}
if(x.type === 'password'){
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
}
else{
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
}


var placeAttr = '';
$('[placeholder]').focus(function(){
    placeAttr = $(this).attr('placeholder')
    $(this).attr('placeholder','');
}).blur(function(){
    $(this).attr('placeholder',placeAttr)
});
   

$('.from-left').hover(function (){
    $(this).find('span').eq(0).animate({
        width:'100%'
    }, 500);
}, function () {
    $(this).find('span').eq(0).animate({
        width:0
    }, 500);
    });
});