$(document).ready(function () {

    // Aos animation
    AOS.init({
        duration: 1000
    });

    // Meet our Team Carousel
    $('.meet-out-team-container .row').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        variableWidth: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    // Show submit message
    $('.contact-form-submit-container').hide();
    $('.contact-form-inner-container .primary-btn').on('click', function () {
        $('.contact-form-inner-container').fadeOut('slow');
        $('.contact-form-submit-container').fadeIn('slow');
    });

    // Open/Close Mobile Menu
    $('.nav-icon').on('click', function () {
        $('body').toggleClass('menu-open');
        $('.menu-item-side').removeClass('second-level');
        $('.sub-menu').removeClass('first-level');
    })

    // Open/Close Mobile Submenu 
    if ($(window).width() < 992) {
        $('.sub-menu > .mobile-arrow').on('click', function (e) {
            $(this).parents('.sub-menu').toggleClass('first-level').siblings().removeClass('first-level');
        });
    }

    // Tablet Header Menu
    if ($(window).width() > 992 && $(window).width() < 1199) {
        $(document).on('touchstart click', function (e) {
            $('.sub-menu').removeClass("active-hover");
        });
        $('.sub-menu').on('touchstart click', function (e) {
            console.log('test');
            event.stopPropagation();
        })
        $('.sub-menu > a').on('touchstart click', function (e) {
            if (e.type == "touchstart") {
                if (!$(this).parent().hasClass("active-hover")) {
                    e.preventDefault();
                }
                $(this).parent().toggleClass("active-hover").siblings().removeClass('active-hover');
                if ($(".sub-menu").hasClass("active-hover")) {
                    $(this).removeClass("active-hover");
                }
                event.stopPropagation();
            } else if (e.type == "click") {
            }
        });
    };

    // Adding Class on Scroll
    $(window).on('load', function () {
        var winOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (winOffset > 55) {
            $('body').addClass('nav-fixed');
        }
    });
    $(window).scroll(function () {
        var winOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (winOffset > 55) {
            $('body').addClass('nav-fixed');
        } else {
            $('body').removeClass('nav-fixed');
        }
    });

    // Blog Custom Accordion
    $(".accordion-item > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".accordion-content").slideUp('slow');
        } else {
            $(".accordion-item > a").removeClass("active");
            $(this).addClass("active");
            $(".accordion-content").slideUp('slow');
            $(this).siblings(".accordion-content").slideDown('slow');
        }
        $('html, body').animate({
            scrollTop: $(".accordion-item > a").offset().top - ($(window).height() - $(this).outerHeight()) / 2
        }, 500);
    });

    // Homepage Banner Carousel
    $('.banner-carousel-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        dots: false,
        arrows: false,
        infinite: true,
        pauseOnHover: true
    });

    // Homepage Info Carousel
    if ($(window).width() < 767) {
        $('.info-carousel').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1500,
            dots: false,
            arrows: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                    }
                }
            ]
        });
    }

    // Software Testing Info Carousel
    if ($(window).width() < 767) {
        $('.service-steps-container').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 1500,
            dots: false,
            arrows: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });
    }

    // Custom Table
    if ($(window).width() > 767) {
        $(".custom-table").each(function () {
            var $this = $(this);
            var newrows = [];
            $this.find("tr").each(function () {
                var i = 0;
                $(this).find("td,th").each(function () {
                    i++;
                    if (newrows[i] === undefined) {
                        newrows[i] = $("<tr></tr>");
                    }
                    newrows[i].append($(this));
                });
            });
            $this.find("tr").remove();
            $.each(newrows, function () {
                $this.append(this);
            });
        });
    }

    // What they said about us carousel
    $('.what-they-said-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 1500,
        dots: false,
        arrows: true,
        infinite: true
    });
});