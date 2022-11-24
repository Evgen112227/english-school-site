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
		625: {
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

///////////////////////// Отправка данных на сервер////////////////////////////////
function send(event, php) {
	console.log('Отправка запроса');
	event.preventDefault ? event.preventDefault() : (event.returnValue = false);
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function () {
		if (req.status >= 200 && req.status < 400) {
			json = JSON.parse(this.response); //
			console.log(json);

			// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
			if (json.result == 'success') {
				// Если сообщение отправлено
				alert('Сообщение отправлено');
			} else {
				// Если произошла ошибка
				alert('Ошибка. Сообщение не отправлено');
			}
			// Если не удалось связаться с php файлом
		} else {
			alert('Ошибка сервера. Номер: ' + req.status);
		}
	};

	// Если не удалось отправить запрос. Стоит блок на хостинге
	req.onerror = function () {
		alert('Ошибка отправки запроса');
	};
	req.send(new FormData(event.target));
}
