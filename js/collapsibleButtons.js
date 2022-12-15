document.addEventListener('DOMContentLoaded', () => {
	const collapsibleButton = document.querySelectorAll('.collapsable');
	collapsibleButton.forEach((el) => {
		el.addEventListener('click', (e) => {
			e.target.classList.toggle('collapsable--active');
			const contentElement = e.target.nextElementSibling;
			if (contentElement.style.maxHeight) {
				contentElement.style.maxHeight = null;
			} else {
				contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
			}
		});
	});
});
