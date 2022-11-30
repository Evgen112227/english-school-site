let center = [53.90617438400433, 27.542316398147573];

function init() {
	let map = new ymaps.Map('map', {
		center,
		zoom: 17,
	});

	let placemark = new ymaps.Placemark(center, {}, {});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	// map.controls.remove('typeSelector'); удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил

	map.geoObjects.add(placemark);

	map.balloon.open([53.90635, 27.5423], {
		contentHeader: 'New Challenge',
	});
}

ymaps.ready(init);
