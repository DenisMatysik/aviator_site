import {showPageGame} from "./showPageGame.js"; //функция отображает страницу с игрой

//Прячем все остальные article, когда открываем игру
const articlesArr = document.querySelectorAll("main article");
const closeOtherArticles = (articleName = "gamePage") => {
	articlesArr.forEach(article => {
		if (article.getAttribute("id") !== articleName) {
			article.classList.add("hideArticle");
		} else {
			article.classList.remove("hideArticle");
		}
	});
};

// Задание реакции на нажатие кнопок навигации
const headerNavigatiobBtns = [];
document.querySelectorAll(".pageNavigation ul li").forEach(btn => {
	// нажатие на все кнопки навигации (кроме копки Разработка - там ховер висит)
	if (!btn.classList.contains("dropdown")) {
		headerNavigatiobBtns.push(btn.querySelector("a"));
	} else {
		// У кнопки "Разрабока" берём выпадающие кнопки
		Array.from(btn.children[2].children).forEach(btn => headerNavigatiobBtns.push(btn));
	}
});
headerNavigatiobBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		switch (btn.textContent) {
			case "Игры":
				closeOtherArticles("allGames");
				break;
			// case "Сайты":
			// 	// closeOtherArticles("allSites");
			// 	break;
			// case "Сервисы":
			// 	// closeOtherArticles("allServises");
			// 	break;
			case "Моб. приложения":
				closeOtherArticles("appDevelopment");
				break;
			case "Посмотреть все работы":
				closeOtherArticles("allGames");
				break;
			// case "Аутстафф":
			// 	// closeOtherArticles("outstaff");
			// 	break;
			// case "Контакты":
			// 	// closeOtherArticles("outstaff");
			// 	break;
			default:
				closeOtherArticles("mainPage");
				break;
		}
	});
});

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

// Добавляем нажатие на икноки игр на странице со всеми играми
const arrGames = document.querySelectorAll(".allGames-section2-projects-container .section2-project");
arrGames.forEach(el => {
	const gameName = el.children[0].getAttribute("src").split("/").at(-1).split(".").at(0);
	el.addEventListener("click", () => {
		if (gameName === "gardenSlots") {
			closeOtherArticles();
			showPageGame(gameName);
		}
	});
});
