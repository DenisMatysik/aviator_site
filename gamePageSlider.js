const mainImage = document.querySelector(".gamePage-section2-gameInf-mainImg img");
const slides = document.getElementsByClassName("slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

const showSlide = index => {
	// Проверить границы индекса
	if (index < 0) {
		index = slides.length - 1;
	} else if (index >= slides.length) {
		index = 0;
	}
	currentIndex = index;
	mainImage.setAttribute("src", slides[index].children[0].getAttribute("src")); // Показать текущий слайд
	//меняем рамку для нижних картинок
	Array.from(slides).forEach(element => {
		if (slides[index] === element) {
			element.children[0].classList.add("slideActive");
		} else {
			element.children[0].classList.remove("slideActive");
		}
	});
};

showSlide(currentIndex);

prevButton.addEventListener("click", function () {
	showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", function () {
	showSlide(currentIndex + 1);
});
