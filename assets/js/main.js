const hamburgerHandler = function() {
	const hmbgrBtn = document.querySelector(".hamburger");
	const menu = document.querySelector(".navbar-menu");

	hmbgrBtn.addEventListener("click", function() {
		menu.classList.toggle("active");
		hmbgrBtn.classList.toggle("active");
	});
};

// IIFE (immediately Invoke Function Expression)
const init = function() {
	hamburgerHandler();
};

init();
