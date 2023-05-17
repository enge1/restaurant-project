$('.animated-progress span').each(function() {
    
    $(this).animate({
        
        width: $(this).attr('data-progress') + '%'
    },1000, function() {
        $(this).text('RATE:' + $(this).attr('data-progress') + '%');
        });
    });
