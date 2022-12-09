document.addEventListener('DOMContentLoaded', () => {
	const forms = document.querySelectorAll('form');
	//Только для сраницы корпоративный английский, для вкладок
	const buttonsCorporatePage = document.querySelectorAll('.corporate-btn');
	let buttonCorporateType;
	if (buttonsCorporatePage.length) {
		buttonsCorporatePage.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				buttonCorporateType = e.target.dataset.type;
				console.log(buttonCorporateType);
			});
		});
	}
	// --------------------------------------------------
	forms.forEach((form) => {
		form.addEventListener('submit', formSend);
	});

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(e.target);
		let formData = new FormData(e.target);
		//Если получены данные из страницы корпоративный английский - взять их, иначе другие
		let dataAttr = buttonCorporateType || e.target.dataset.type;
		buttonCorporateType = '';
		//Дополняем объект formData доп данными. Сюда будет приходить переменная, определяющая, какой попап был отправлен.
		formData.set('type', dataAttr);
		console.log(formData);
		if (error === 0) {
			e.target.closest('.spinner').classList.add('_sending');
			let response = await fetch('send.php', {
				method: 'POST',
				body: formData,
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				e.target.reset();
				e.target.closest('.spinner').classList.remove('_sending');
			} else {
				alert('Error from JS');
				e.target.closest('.spinner').classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = form.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	// function emailTest(input) {
	// 	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	// }
});
