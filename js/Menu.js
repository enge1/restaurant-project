const colors = document.getElementsByClassName('colors');
let i;
for(i = 0;i<colors.length;i++){
    colors[i].addEventListener('click', changecolor)
}

function changecolor(){
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--color',color);
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