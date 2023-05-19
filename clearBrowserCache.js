export const clearBrowserCache = () => {
	if (window.performance && window.performance.clearCache) {
		// Очистка кэша с помощью стандартного метода clearCache() в браузере Chrome
		window.performance.clearCache();
	} else {
		// Обновление страницы только если флаг clearCache не установлен
		if (!sessionStorage.getItem("clearCache")) {
			sessionStorage.setItem("clearCache", true);
			window.location.reload(true);
		} else {
			sessionStorage.removeItem("clearCache");
		}
	}
	// console.log("кэш браузера почищен");
};
