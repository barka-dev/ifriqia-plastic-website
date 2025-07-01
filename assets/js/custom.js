(function($) {
	'use strict';

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});
	
	// Sticky, Go To Top JS
	$(window).on('scroll', function() {
		// Header Sticky JS
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		};
	});

	/*** Search bar */
	$('.header-search').on('click', '.search-toggle', function(e) {
		e.preventDefault();
		var selector = $(this).data('selector');
		$(selector).toggleClass('show').find('.search-input').focus();
	});

	// Others Option For Responsive JS 
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	

    // Search Popup JS
	$('.close-btn').on('click',function() {
		$('.search-overlay').fadeOut();
		$('.search-btn').show();
		$('.close-btn').removeClass('active');
	});
	$('.search-btn').on('click',function() {
		$(this).hide();
		$('.search-overlay').fadeIn();
		$('.close-btn').addClass('active');
	});


	// Subscribe form JS
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter, #validator-newsletter-2").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter, #validator-newsletter-2").removeClass().addClass(msgClasses).text(msg);
	}


	// Count Time JS
	function makeTimer() {
		var endTime = new Date("november  30, 2026 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);

    scrollCue.init();

    // Main JS
    $('.main-banner-slider').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        nav:true,
		animateOut: 'zoomOut',
		animateIn: 'zoomOut',
		effect: 'fade',
        autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		fadeEffect: {
		crossFade: true,
		},
        navText:[
            '<i class="flaticon-left-arrow"></i>',
			'<i class="flaticon-next"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


	var getslide = $('.main-box li').length - 1;

    var slidecal = 30/getslide+'%';

    $('.box').css({"width": slidecal});

    $('.box').click(function(){
        $('.box').removeClass('active');
       $(this).addClass('active');
    });

    // Card  JS
    $('.card-slider').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		navText:[
            '<i class="flaticon-left-arrow"></i>',
			'<i class="flaticon-next"></i>'
        ],
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:1,
			},
			768:{
				items:2,
			},
			992:{
				items:2.3,
			},
			1200:{
				items:3.5,
			},
			1300:{
				items:3.7
			}
		}
	})

    // Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

    // Fancy Box
	Fancybox.bind('[data-fancybox="gallery"]', {
		caption: function (fancybox, carousel, slide) {
		  return (
			`${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
		  );
		},
	});

    // Project  JS
    $('.project-slider').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		navText:[
            '<i class="flaticon-left-arrow"></i>',
			'<i class="flaticon-next"></i>'
        ],
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:1,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:3.5,
			},
			1300:{
				items:3.9
			}
		}
	})

    // Team  JS
    $('.team-slider').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		navText:[
            '<i class="flaticon-left-arrow"></i>',
			'<i class="flaticon-next"></i>'
        ],
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:4,
			},
			1300:{
				items:4
			}
		}
	})

    // Popup JS
	$(document).ready(function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});

    // Team  JS
    $('.testimonial-slider').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		navText:[
            '<i class="flaticon-left-arrow"></i>',
			'<i class="flaticon-next"></i>'
        ],
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:1,
			},
			768:{
				items:1,
			},
			992:{
				items:2,
			},
			1200:{
				items:2,
			},
			1300:{
				items:2
			}
		}
	})

	// Team  JS
    $('.industry-slider').owlCarousel({
		stagePadding: 380,
		loop:true,
		margin:25,
		nav:true,
		center:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		navText:[
            '<i class="flaticon-left-arrow"></i>',
			'<i class="flaticon-next"></i>'
        ],
		responsive:{
			0:{
				stagePadding: 0,
				items:1,
				
			},
			576:{
				stagePadding: 100,
				items:1,
			},
			768:{
				stagePadding: 180,
				items:1,
			},
			992:{
				stagePadding: 180,
				items:1,
			},
			1200:{
				stagePadding: 280,
				items:1,
			},
			1300:{
				items:1
			}
		}
	})

	// Home Slider
	var swiper = new Swiper('.home-slider-container', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 0,
		animateOut: 'zoomOut',
		animateIn: 'zoomOut',
		effect: 'fade',
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		fadeEffect: {
		crossFade: true,
		},
		navigation: {
			nextEl: '.home-slider-container .swiper-btn-next',
			prevEl: '.home-slider-container .swiper-btn-prev',
		},
	});

	// Expert  JS
    $('.expert-slider').owlCarousel({
		loop:true,
		margin:15,
		nav:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		navText:[
            '<i class="flaticon-left-arrow"></i>',
			'<i class="flaticon-next"></i>'
        ],
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
			},
			768:{
				items:2,
			},
			992:{
				items:2,
			},
			1200:{
				items:3,
			},
			1300:{
				items:3
			}
		}
	})

	// Home Slider
	var swiper = new Swiper('.about-slider-container', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 0,
		animateOut: 'zoomOut',
		animateIn: 'zoomOut',
		effect: 'fade',
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		fadeEffect: {
		crossFade: true,
		},
	});


	// Maintain  JS
    $('.maintain-slider').owlCarousel({
		loop:true,
		margin:25,
		nav:false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
			},
			768:{
				items:2,
			},
			992:{
				items:2,
			},
			1200:{
				items:3,
			},
			1300:{
				items:3
			}
		}
	})

	// Maintain  JS
    $('.recent-project-slider').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		dots: false ,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		navText:[
            '<i class="flaticon-left-arrow"></i>',
			'<i class="flaticon-next"></i>'
        ],
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:1,
			},
			768:{
				items:1,
			},
			992:{
				items:1,
			},
			1200:{
				items:1,
			},
			1300:{
				items:1
			}
		}
	})

	// Team  JS
    $('.member-slider').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 2000,
		autoplayHoverPause: true,
		navText:[
            '<i class="flaticon-left-arrow"></i>',
			'<i class="flaticon-next"></i>'
        ],
		responsive:{
			0:{
				items:1,
			},
			576:{
				items:2,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:4,
			},
			1300:{
				items:4
			}
		}
	})

	
	// Product Quantity
    var minVal = 1,
    maxVal = 20;
    $(".increaseQty").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qtyValue").val(value);
    });
    
    // Decrease product quantity on cart page
    $(".decreaseQty").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qtyValue").val(value);
    });

	
	try {
		// Go to Top
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 50;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		});
	} catch (err) {}

	

	try {
		$(window).on('load', function() {
			handlePreloader();
		});
	
		//Hide Loading Box (Preloader)
		function handlePreloader() {
			if($('.loader-wrap').length){
				$('.loader-wrap').delay(1000).fadeOut(500);
			}
			TweenMax.to($(".loader-wrap .overlay"), 1.2, {
				force3D: true,
				left: "100%",
				ease: Expo.easeInOut,
			});
		}
	
		if ($(".preloader-close").length) {
			$(".preloader-close").on("click", function(){
				$('.loader-wrap').delay(200).fadeOut(500);
			})
		}
	} catch (err) {}
	
})(jQuery);

