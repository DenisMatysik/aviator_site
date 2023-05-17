//Для элементов 2-ой секции
const navItems = document.querySelectorAll(".main-section2-projects-nav span");
navItems.forEach(item => {
	item.addEventListener("click", () => {
		// Удаление активного класса у всех элементов
		navItems.forEach(navItem => navItem.classList.remove("active"));
		// Добавление активного класса на текущий элемент
		item.classList.add("active");
	});
});

//для карусели обоев
let mainImage = document.querySelector(".gamePage-section2-gameInf-mainImg img");
let slides = document.getElementsByClassName("slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

showSlide(currentIndex);

prevButton.addEventListener("click", function () {
	showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", function () {
	showSlide(currentIndex + 1);
});

function showSlide(index) {
	// Проверить границы индекса
	if (index < 0) {
		index = slides.length - 1;
	} else if (index >= slides.length) {
		index = 0;
	}
	currentIndex = index;
	if (currentIndex != 0) {
		mainImage.setAttribute("src", slides[index].children[0].getAttribute("src")); // Показать текущий слайд
	}
}
