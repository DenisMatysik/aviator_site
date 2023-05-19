// Устанавливаем значения для игр
const gamesConfiguration = [
	{
		gameName: "gardenSlots",
		path: "assets/img/gardenSlots/",
		specifications: {
			name: "Garden Slot",
			typeGame: "Слоты",
			releaseDate: "07.11.2022",
			technology: "HTML5",
			maxWin: "10000 xB",
			reels: 5,
			volatility: "Средняя",
		},
		gameDescription:
			"Для разработки приложений мы используем технологию React Native (на ней создан Instagram). Данная технология позволяет создать приложение для Android и IOS одновременно, используя единый код, что значительно сокращает сроки и стоимость разработки. В классическом варианте Вам бы пришлось искать отдельно разработчиков Android Java (под Android) и Swift (под IOS), отдельно вести проект с каждой командой, отдельно тестировать каждую версию приложения и т.д.",
	},
];

//Изменяем отображение игры
export const showPageGame = gameName => {
	const section1 = document.querySelector("#gamePage .gamePage-section1");
	const gameInf = gamesConfiguration.find(conf => conf.gameName === gameName);
	const navigationelement = document.querySelector(".gamePage-section2-navigation .selectedChapter"); //Навигация
	const gameTitle = document.querySelector(".gamePage-section2-title");
	const gameDescription = document.querySelector(".gamePage-section2-textBlock p");
	const mainFrame = document.querySelector(".gamePage-section2-gameInf-mainImg img"); //главная картинка
	const gameFrames = document.querySelectorAll(".gamePage-section2-carouselContainer .carousel .slide img"); //остальные картинки
	const specificationsArr = document.querySelectorAll(".gamePage-section2-gameInf-Specifications table tbody tr .gameInf-Specifications-value");

	section1.style.backgroundImage = `url('${gameInf.path}background.png')`;
	// section1.children[0].setAttribute("src", `${gameInf.path}background.png`); //устанавливаем картинку секции 1
	navigationelement.textContent = gameInf.specifications.name; //изменяем навигацию страницы
	gameTitle.textContent = gameInf.specifications.name; //изменяем заколовок страницы
	mainFrame.setAttribute("src", `${gameInf.path}/frame1.png`); //устанавливаем новую главную картинку
	gameFrames.forEach((frame, frameIndex) => frame.setAttribute("src", `${gameInf.path}/frame${frameIndex + 1}.png`)); //устанавливаем новые второстепеныне картинки
	specificationsArr.forEach(spec => (spec.textContent = gameInf.specifications[spec.getAttribute("atr")])); //Устанавливаем другие значения для Характеристик игры
	gameDescription.textContent = gameInf.gameDescription; //изменяем описание страницы
};
