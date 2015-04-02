$(document).ready(function () {

    var resizable = function () {
        var height = $('html').height();
        var headerHeight = $('header').height();
        if (height > 400) {
            $('.top-wrap').css({
                "height": height - headerHeight
            });
        }

    }

    $(window).resize(function () {
        resizable();
    });

    resizable();

    $('.training-time').delay(1500).fadeIn(400);
    $('.training-time .nav-btn').live("click", function () {
        $(this).addClass("hide");
        $(".training-time").css({
            "left": "-242px"
        });
    });
    $('.training-time .nav-btn.hide').live("click", function () {
        $(this).removeClass("hide");
        $(".training-time").css({
            "left": "5px"
        });
    });

    $(window).scroll(function () {
        var top = $(document).scrollTop();

        if (top > 130) {
            $(".about-ultimate p:eq(0)").animate({
                left: 0,
                opacity: 1
            }, 900);
        }
        if (top > 230) {
            $(".about-ultimate p:eq(1)").animate({
                left: 0,
                opacity: 1
            }, 900);
        }
        if (top > 330) {
            $(".about-ultimate p:eq(2)").animate({
                left: 0,
                opacity: 1
            }, 900);
        }
        if (top > 430) {
            $(".about-ultimate p:eq(3)").animate({
                opacity: 1
            }, 900);
        }
    });

    $('.login-btn').live("click", function () {
        $(".login-form").fadeIn(800);
    });

    $('.login-form .close').live("click", function () {
        $(".login-form").fadeOut(800);
    });
});
