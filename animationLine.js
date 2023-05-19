let animationId; // Идентификатор анимации
let speed = 2; // Скорость появления линии (по умолчанию 2)

const animateLine = line => {
	const container = line.parentNode;
	const currentWidth = parseInt(line.style.width) || 0;
	const maxWidth = container.offsetWidth;

	if (currentWidth < maxWidth) {
		const delta = speed; // Изменение ширины линии с учетом скорости
		const newWidth = currentWidth + delta; // Увеличиваем ширину с учетом приращения
		line.style.width = Math.min(newWidth, maxWidth) + "px"; // Ограничиваем максимальную ширину в пикселях
	}

	if (currentWidth < maxWidth) {
		animationId = requestAnimationFrame(() => animateLine(line));
	}
};

const startLineAnimation = line => {
	line.style.width = "0"; // Сбрасываем ширину линии перед анимацией
	animationId = requestAnimationFrame(() => animateLine(line));
};

export {startLineAnimation};
