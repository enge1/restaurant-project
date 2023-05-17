/*login*/
$('.from-left').hover(function (){
    $(this).find('span').eq(0).animate({
        width:'100%'
    }, 300);
}, function (){
    $(this).find('span').eq(0).animate({
        width:0
    }, 300);
    });

/*image*/
$(function () {
    'use strict'
    $('.header').height($(window).height());
    $(window).resize(function(){
        $('.header').height($(window).height());
    })
})

/*toogel*/
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
/*check*/
var x = document.getElementById("par");
function myfen(){
    "use strict"
if(x.value ==""){
    document.getElementById("meet").innerHTML = "Enter your Email";
}
else{
    window.location.href = "file:///F:/anton/titel.html"
}
};