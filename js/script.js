// script.js
document.addEventListener('DOMContentLoaded', function () {
	// Логика для переключения табов
	const tabs = document.querySelectorAll('.tabs__item');
	const panels = document.querySelectorAll('.tabs__panel');

	tabs.forEach((tab) => {
		tab.addEventListener('click', function () {
			tabs.forEach((t) => t.classList.remove('tabs__item--active'));
			panels.forEach((panel) => panel.classList.remove('tabs__panel--active'));

			this.classList.add('tabs__item--active');
			const targetPanel = document.querySelector(
				`#${this.getAttribute('data-tab')}`
			);
			targetPanel.classList.add('tabs__panel--active');
		});
	});

	// Инициализация Swiper.js
	const swiper = new Swiper('.swiper', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	});
});
