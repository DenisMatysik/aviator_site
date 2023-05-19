const element = document.querySelector(".blue-point");
const container = document.querySelector(".mainPage-section1-image-block");
let width = 0;

export const animateLine = () => {
	width += 0.5; // Увеличение ширины линии
	element.style.width = width + "px"; // Изменение ширины элемента
	if (width < container.offsetWidth) {
		requestAnimationFrame(animateLine); // Продолжаем анимацию
	}
};

export const resetLine = () => {
	width = 0;
	element.style.width = 0 + "px"; // Изменение ширины элемента
};
