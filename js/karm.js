$('.from-left').hover(function (){
    $(this).find('span').eq(0).animate({
        width:'100%'
    }, 300);
}, function (){
    $(this).find('span').eq(0).animate({
        width:0
    }, 300);
    });
    