$(window).bind('scroll', function() {
        if ($(window).scrollTop() > 700) {
            $('.main__body_presentacion').hide();
        }
        else {
            $('.main__body_presentacion').show();
        }
    });

