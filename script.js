const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



var swiper = new Swiper(".home-slider", {
	loop:true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
 });
 
 var swiper = new Swiper(".reviews-slider", {
	grabCursor:true,
	loop:true,
	autoHeight:true,
	spaceBetween: 20,
	breakpoints: {
	   0: {
		 slidesPerView: 1,
	   },
	   700: {
		 slidesPerView: 2,
	   },
	   1000: {
		 slidesPerView: 3,
	   },
	},
 });
 