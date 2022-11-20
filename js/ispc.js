'use strict';
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	},
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
	const arrows = document.querySelectorAll('.menu__arrow');
	if (arrows.length) {
		arrows.forEach((arrow) => {
			arrow.addEventListener('click', (e) => {
				e.target.closest('.menu__item').classList.toggle('_active');
			});
		});
	}
} else {
	document.body.classList.add('_pc');
}

const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	iconMenu.addEventListener('click', (e) => {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

const menuLinks = document.querySelectorAll('[data-goto]');
if (menuLinks.length) {
	menuLinks.forEach((link) => {
		link.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const link = e.target;
		if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
			const gotoBlock = document.querySelector(link.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}
}
