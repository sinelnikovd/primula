
$(document).ready(function() {

	

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}


	var carouselMessage = $('.slider').owlCarousel({
		loop: true,
		nav: false,
		items: 4,
		margin: 70
	});
	$('.nav__prev_message').click(function() {
		carouselMessage.trigger('prev.owl.carousel');
	});
	$('.nav__next_message').click(function() {
		carouselMessage.trigger('next.owl.carousel');
	})


	var carouselSets = $('.sets').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		dotsContainer: '.sets__dot',
		dots: true,
	});



	$('.nav__carousel-work_prev').click(function() {
		$(this).closest(".slider-work").find(".carousel-work").trigger('prev.owl.carousel');
	});
	$('.nav__carousel-work_next').click(function() {
		$(this).closest(".slider-work").find(".carousel-work").trigger('next.owl.carousel');
	});

	$('.recall__button').click(function () {
		$('.recall-item_show1').removeClass('recall-item_show1').appendTo('.recall__items');
		$('.recall-item_show2').removeClass('recall-item_show2').addClass('recall-item_show1');
		$('.recall-item_show3').removeClass('recall-item_show3').addClass('recall-item_show2');
		$('.recall-item_show2').next(".recall-item").addClass('recall-item_show3');


	});


	$('.sets').on('click','#minimal-btn',function () {
		console.log('asdasdsad');
		$('body,html').animate({
			scrollTop: $('.price-minimal').offset().top
		}, 400);
		return false;
	});

	$('.sets').on('click','#luxury-btn',function () {
		$('body,html').animate({
			scrollTop: $('.price-luxury').offset().top
		}, 400);
		return false;
	});

	$('.sets').on('click','#architecture-btn',function () {
		$('body,html').animate({
			scrollTop: $('.price-architecture').offset().top
		}, 400);
		return false;
	});

	$('.message__link').magnificPopup({
		type: 'image'
	});


	$('.open-popup').magnificPopup({
		items: {
			src: '.popup',
			type: 'inline'
		}
	});


	$(".works-list__item").click(function() {
		$(".works-sliders").show();
		$(".works-conten").addClass("slider-active");
		$(".works-form").addClass("slider-active");
		$(".slider-work").eq(parseInt($(this).data("slider"))).show();
		$(".slider-work").eq(parseInt($(this).data("slider"))).find(".carousel-work").owlCarousel({
			loop: true,
			nav: false,
			items: 1
		});
	});

	$('.works-sliders__icon').click(function() {
		$(".works-sliders").hide();
		$(".works-conten").removeClass("slider-active");
		$(".works-form").removeClass("slider-active");
		$(".slider-work").hide();
	});


	$('.hamburger').click(function () {
		$(this).toggleClass('active');
		$('.main-menu').toggleClass('active');

	});

	$('.main-menu__link, .nav-bar__link').click(function() {
		$('body,html').animate({
			scrollTop: $($(this).data('block')).offset().top
		}, 800);
		if($(this).hasClass('main-menu__link')){
			$('.hamburger').toggleClass('active');
			$('.main-menu').toggleClass('active');
		}
		return false;
	});

});

	//SVG Fallback
if (!Modernizr.svg) {
	// wrap this in a closure to not expose any conflicts
	(function() {
		// grab all images. getElementsByTagName works with IE5.5 and up
		var imgs = document.getElementsByTagName('img'),endsWithDotSvg = /.*\.svg$/,i = 0,l = imgs.length;
		// quick for loop
		for(; i < l; ++i) {
			if(imgs[i].src.match(endsWithDotSvg)) {
				// replace the png suffix with the svg one
				imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			}
		}
	})();
}