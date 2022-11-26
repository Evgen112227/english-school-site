let center = [53.90617438400433, 27.542316398147573];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17,
	});

	let placemark = new ymaps.Placemark(center, {}, {});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил

	map.geoObjects.add(placemark);
}

ymaps.ready(init);
