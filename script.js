import {showPageGame} from "./showPageGame.js"; //функция отображает страницу с игрой

//MainPage - элементы 2-ой секции
const navItems = document.querySelectorAll(".main-section2-projects-nav span");
navItems.forEach(item => {
	item.addEventListener("click", () => {
		// Удаление активного класса у всех элементов
		navItems.forEach(navItem => navItem.classList.remove("active"));
		// Добавление активного класса на текущий элемент
		item.classList.add("active");
	});
});

//Прячем все остальные article, когда открываем игру
const articlesArr = document.querySelectorAll("main article");
const closeOtherArticles = () => {
	articlesArr.forEach(article => {
		if (article.getAttribute("id") !== "gamePage") {
			article.style.display = "none";
		} else {
			article.style.display = "block";
		}
	});
};

// Добавляем нажатие на икноки игр
const arrGames = document.querySelectorAll(".aboutCompany-section2-projects-container .section2-project");
arrGames.forEach(el => {
	const gameName = el.children[0].getAttribute("src").split("/").at(-1).split(".").at(0);
	el.addEventListener("click", () => {
		if (gameName === "gardenSlots") {
			closeOtherArticles();
			showPageGame(gameName);
		}
	});
});

//gamePage - карусель обоев
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
	mainImage.setAttribute("src", slides[index].children[0].getAttribute("src")); // Показать текущий слайд
}
