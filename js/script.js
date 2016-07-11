var toggle = document.getElementById('burger_menu');
var nav = document.getElementById('nav');
toggle.onmousedown = function(e) {
	e.preventDefault();
	toggle.classList.toggle("on");
	return false;
}


var slider = $('.slider').bxSlider({
	mode: 'fade',
	controls: false,
	responsive: false,
	pagerSelector: $('.switcher')
});

 $('.btn-next').click(function(){
  slider.goToNextSlide();
  return false;
});

$('.btn-prev').click(function(){
  slider.goToPrevSlide();
  return false;
});