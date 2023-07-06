const $menuBurger = document.querySelector('#btnBurger');
const $asideMenu = document.querySelector('#asideMenu');

$menuBurger.addEventListener('click', e => {
	console.log('Click en menu burger');

	let containsClass = $menuBurger.classList.contains('is-active');

	if (containsClass === false) {
		console.log('se abrio el menu burger');
		$menuBurger.classList.add('is-active');
		$asideMenu.style.setProperty('visibility', 'visible');
	} else {
    console.log('se cerro el menu burger');
		$menuBurger.classList.remove('is-active');
		$asideMenu.style.setProperty('visibility', 'hidden');
	}
});
