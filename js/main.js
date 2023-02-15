const menuBtn = document.querySelector('.menu-btn'),
	hamburger = document.querySelector('.menu-btn-burger'),
	nav = document.querySelector('.nav'),
	menuNav = document.querySelector('.menu-nav'),
	navItems = document.querySelectorAll('.menu-nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		hamburger.classList.add('open');
		nav.classList.add('open');
		menuNav.classList.add('open');
		navItems.forEach((item) => {
			item.classList.add('open');
		});
		showMenu = true;
	} else {
		hamburger.classList.remove('open');
		nav.classList.remove('open');
		menuNav.classList.remove('open');
		navItems.forEach((item) => {
			item.classList.remove('open');
		});
		showMenu = false;
	}
}
