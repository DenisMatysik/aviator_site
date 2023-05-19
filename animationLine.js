const element = document.querySelector(".blue-point");
const container = document.querySelector(".mainPage-section1-image-block");
let width = 0;

export const startAnimLine = () => {
	resetLine();
	element.style.display = "block";
	animateLine();
};

const animateLine = () => {
	width += 1; // Увеличение ширины линии
	element.style.width = width + "px"; // Изменениеирины элемента
	if (width <= 2 * container.offsetWidth - 1) {
		requestAnimationFrame(animateLine); // Продолжаем анимацию
	}
};

const resetLine = () => {
	width = 0;
	element.style.left = 0 + "px"; // Изменение ширины элемента
};
