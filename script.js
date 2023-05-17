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
const closeOtherArticles = (articleName = "gamePage") => {
	articlesArr.forEach(article => {
		if (article.getAttribute("id") !== articleName) {
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
