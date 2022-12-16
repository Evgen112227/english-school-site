document.addEventListener('DOMContentLoaded', () => {
	const collapsibleButton = document.querySelectorAll('.collapsable');
	collapsibleButton.forEach((el) => {
		el.addEventListener('click', (e) => {
			const targetElement = e.target.closest('.collapsable');
			targetElement.classList.toggle('collapsable--active');
			targetElement.firstElementChild.classList.toggle('active');
			const contentElement = targetElement.nextElementSibling;
			if (contentElement.style.maxHeight) {
				contentElement.style.maxHeight = null;
			} else {
				contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
			}
		});
	});
});
