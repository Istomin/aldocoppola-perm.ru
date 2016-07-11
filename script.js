var toggle = document.getElementById('burger_menu');
var nav = document.getElementById('nav');
toggle.onmousedown = function(e) {
	e.preventDefault();
	nav.classList.toggle("active");
}