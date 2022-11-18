new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	slidesPerView: 3,
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	loop: true,
	autoplay: {
		delay: 5000,
		disabledOnInteraction: true,
	},
	speed: 1200,
	// direction: 'vertical',
	// effect: 'cube',
	// cubeEffect: {
	// 	slideShadows: true,
	// 	shadow: true,
	// 	shadowOffset: 20,
	// 	shadowScale: 0.94,
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
	preloadImages: false,
	// Enable lazy loading
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: true,
	},
	watchSlidesProgress: true,
	a11y: {
		enabled: true,
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
		firstSlideMessage: 'This is the first slide',
		lastSlideMessage: 'This is the last slide',
	},
});
