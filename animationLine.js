const element = document.querySelector(".blue-point");
const container = document.querySelector(".mainPage-section1-image-block");
let width = 0;
let startX = 0;
export const animateLine = () => {
	width += 0.5; // Увеличение ширины линии
	// startX += 0.5; // Увеличение позиции элемента по горизонтали
	element.style.width = width + "px"; // Изменениеирины элемента
	// element.style.left = startX + "px"; // Изменение позиции элемента по горизонтали
	if (width <= container.offsetWidth) {
		requestAnimationFrame(animateLine); // Продолжаем анимацию
	}
};

export const resetLine = () => {
	width = 0;
	startX = 0;
	element.style.left = 0 + "px"; // Изменение ширины элемента
	element.style.width = 0 + "px"; // Изменение ширины элемента
};
