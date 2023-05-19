import {showPageGame} from "./showPageGame.js"; //функция отображает страницу с игрой
import {startAnimLine} from "./animationLine.js"; //функция отображает страницу с игрой

//Прячем все остальные article, когда открываем игру
const articlesArr = document.querySelectorAll("main article");
const logoContainer = document.querySelector(".header-logo-container");
const closeOtherArticles = (articleName = "gamePage") => {
	articlesArr.forEach(article => {
		if (article.getAttribute("id") !== articleName) {
			article.classList.add("hideElement");
		} else {
			article.classList.remove("hideElement");
		}
	});
	logoContainer.querySelector("img").style.display = articleName === "allGames" ? "block" : "none";
	logoContainer.querySelector("p").textContent = articleName === "allGames" ? "AVIOR GAMES" : "AVIOR GROUP";
};

//Проверка анимации точки
document.addEventListener("keydown", event => {
	if (event.code == "KeyK") {
		startAnimLine();
	}
});

// Задание реакции на нажатие кнопок навигации
const headerNavigatiobBtns = [];
const seeAllProjects = document.querySelector(".mainPage-section2-link");
headerNavigatiobBtns.push(seeAllProjects.children[0]);

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
				console.log("111");
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
const navItems = document.querySelectorAll(".mainPage-section2-projects-nav span");
const projects = document.querySelectorAll(".mainPage-section2-projects-container .section2-project");
//функция прячет все остальные плитки, кроме выбранного типа
const hideOtherProjects = typeProejct => {
	let hideRule; //правило по которому элементы будут скрываться
	switch (typeProejct) {
		case "Игры":
			hideRule = "game";
			break;
		case "Приложения":
			hideRule = "app";
			break;
		case "Сервисы":
			hideRule = "service";
			break;
		default:
			hideRule = "showAllElements";
			break;
	}
	// скрываю элементы которые не соответствуют правилу
	projects.forEach(el => {
		if (hideRule === "showAllElements") {
			el.style.display = "flex";
		} else {
			el.style.display = el.children[0].getAttribute("atr") === hideRule ? "flex" : "none";
		}
	});
};

navItems.forEach(item => {
	item.addEventListener("click", () => {
		// Удаление активного класса у всех элементов
		navItems.forEach(navItem => navItem.classList.remove("active"));
		// Добавление активного класса на текущий элемент
		item.classList.add("active");
		hideOtherProjects(item.textContent);
	});
});

// Добавляем нажатие на икноки игр на странице со всеми играми
// const arrGames = document.querySelectorAll(".allGames-section2-projects-container .section2-project");
const arrGames = document.querySelectorAll(".section2-project");

arrGames.forEach(el => {
	const gameName = el.children[0].getAttribute("src").split("/").at(-1).split(".").at(0);
	el.addEventListener("click", () => {
		if (gameName === "gardenSlots") {
			closeOtherArticles();
			showPageGame(gameName);
			logoContainer.querySelector("img").style.display = "block"; //отображение значка AviorGames
			logoContainer.querySelector("p").textContent = "AVIOR GAMES";
		}
	});
	el.addEventListener("mouseover", function () {
		el.style.transform = "scale(1.05)";
	});

	el.addEventListener("mouseout", function () {
		el.style.transform = "scale(1)";
	});
});
