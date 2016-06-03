
(function ($) {
    //adds shadow to menu-bar on scroll.
    $(window).scroll(function () {
        var a = 10;
        var pos = $(window).scrollTop();
        if (pos > a) {
            $("#header").css('box-shadow', '3px 3px 5px 1px rgba(0,0,0,.5)');
            $("#header").css('-moz-box-shadow', '3px 3px 5px 1px rgba(0,0,0,.5)');
            $("#header").css('-webkit-box-shadow', '3px 3px 5px 1px rgba(0,0,0,.5)');
            $("#header").css('-ms-box-shadow', '3px 3px 5px 1px rgba(0,0,0,.5)');
            $("#header").css('-o-box-shadow', '3px 3px 5px 1px rgba(0,0,0,.5)');
        } else {
            $("#header").css('box-shadow', 'none');
            $("#header").css('-moz-box-shadow', 'none');
            $("#header").css('-webkit-box-shadow', 'none');
            $("#header").css('-ms-box-shadow', 'none');
            $("#header").css('-o-box-shadow', 'none');
        }
    });

    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top - 70 /*70 = height of navbar*/
            }, 1000);
        });
    };
    
    $(document).ready(function () {
        $('.single-image-list').slick({
            dots: true,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 2000
        });
    });
})(jQuery);
