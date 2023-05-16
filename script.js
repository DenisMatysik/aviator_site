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
