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

    // Number Animation on Scroll
    var viewed = false;
    var loaded = false;
    if ($('.num-counter-container').length) {
        (function ($) {
            $.fn.countTo = function (options) {
                options = options || {};

                return $(this).each(function () {
                    // set options for current element
                    var settings = $.extend({}, $.fn.countTo.defaults, {
                        from: $(this).data('from'),
                        to: $(this).data('to'),
                        speed: $(this).data('speed'),
                        refreshInterval: $(this).data('refresh-interval'),
                        decimals: $(this).data('decimals')
                    }, options);

                    // how many times to update the value, and how much to increment the value on each update
                    var loops = Math.ceil(settings.speed / settings.refreshInterval),
                        increment = (settings.to - settings.from) / loops;

                    // references & variables that will change with each update
                    var self = this,
                        $self = $(this),
                        loopCount = 0,
                        value = settings.from,
                        data = $self.data('countTo') || {};

                    $self.data('countTo', data);

                    // if an existing interval can be found, clear it first
                    if (data.interval) {
                        clearInterval(data.interval);
                    }
                    data.interval = setInterval(updateTimer, settings.refreshInterval);

                    // initialize the element with the starting value
                    render(value);

                    function updateTimer() {
                        value += increment;
                        loopCount++;

                        render(value);

                        if (typeof (settings.onUpdate) == 'function') {
                            settings.onUpdate.call(self, value);
                        }

                        if (loopCount >= loops) {
                            // remove the interval
                            $self.removeData('countTo');
                            clearInterval(data.interval);
                            value = settings.to;

                            if (typeof (settings.onComplete) == 'function') {
                                settings.onComplete.call(self, value);
                            }
                        }
                    }

                    function render(value) {
                        var formattedValue = settings.formatter.call(self, value, settings);
                        $self.html(formattedValue);
                    }
                });
            };
            $.fn.countTo.defaults = {
                from: 0,               // the number the element should start at
                to: 0,                 // the number the element should end at
                speed: 1000,           // how long it should take to count between the target numbers
                refreshInterval: 100,  // how often the element should be updated
                decimals: 0,           // the number of decimal places to show
                formatter: formatter,  // handler for formatting the value before rendering
                onUpdate: null,        // callback method for every time the element is updated
                onComplete: null       // callback method for when the element finishes updating
            };

            function formatter(value, settings) {
                return value.toFixed(settings.decimals);
            }
        }(jQuery));
        
        $(window).scroll(testScroll);
        viewed = false;

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
        if (isScrolledIntoView($(".num-counter-container")) && !loaded) {
            loaded = true;
            $(window).on('load', function() {
                loaded = true;
                $('.num-counter-item .num').each(count);
                    function count(options) {
                        var $this = $(this);
                        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                        $this.countTo(options);
                    }
            });
        }
        loaded = true;
        function testScroll() {
            if (isScrolledIntoView($(".num-counter-container")) && !viewed && loaded) {
                viewed = true;
                // custom formatting example
                $('.num-counter-item .num').data('countToOptions', {
                    formatter: function (value, options) {
                        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                    }
                });
                // start all the timers
                $('.num-counter-item .num').each(count);
                function count(options) {
                    var $this = $(this);
                    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                    $this.countTo(options);
                }
            }
        }
    }
});