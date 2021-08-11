
// IBG ============================================================

function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();

// BURGER =========================================================

$('.header__burger').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__item').toggleClass('active');
	$('body').toggleClass('lock');
});

// SLIDER =========================================================

if($('.slider__body').length>0){
	$('.slider__body').slick({
		//autoplay: true,
		//infinite: false,
		adaptiveHight:true,
		dots: true,
		arrows: false,
		accessibility: false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}