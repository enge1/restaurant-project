    /*check*/
    var a = document.getElementById("pass");
    var x = document.getElementById("par");
    function myfun(){
        "use strict"
    if(a.value =="" || a.value =="" ){
        document.getElementById("nasa").innerHTML = "Pleas Enter password ";
        document.getElementById("meet").innerHTML = "Pleas Enter Email ";
    }
    else if(a.value.length<6){
        document.getElementById("nasa").innerHTML = "Pleas Enter more than 6";
    }
    else if(a.value.length>20){
        document.getElementById("nasa").innerHTML = "enter less than 20 ";
    }
    else{
        window.location.href = "file:///F:/anton/login.html"
    }
    };

function show(){
    var x = document.getElementById("pass")
    var y = document.getElementById("hide1")
    var z = document.getElementById("hide2")
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
}

$('.from-left').hover(function (){
    $(this).find('span').eq(0).animate({
        width:'100%'
    }, 300);
}, function (){
    $(this).find('span').eq(0).animate({
        width:0
    }, 300);
    });