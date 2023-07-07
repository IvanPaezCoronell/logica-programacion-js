// Variables menu burger
const $menuBurger = document.querySelector('#btnBurger');
const $asideMenu = document.querySelector('#asideMenu');

// Variables reloj digital
const $spanReloj = document.querySelector('#idReloj');
const $btnReloj = document.querySelector('#btnReloj');
const $btnRelojOcultar = document.querySelector('#btnRelojOcultar');

// Variables Alarma
const $btnAlarma = document.querySelector('#btnAlarma');
const $btnDetenerAlarma = document.querySelector('#btnDetenerAlarma');
const $audio = document.querySelector('#idAudio');

// TODO: Menu Hamburguesa
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

// TODO: Reloj Digital

const reloj = () => {
	$btnReloj.addEventListener('click', e => {
		time = setInterval(() => {
			let fecha = new Date().toLocaleTimeString();
			$spanReloj.innerHTML = `${fecha}`;
		}, 100);

		$btnReloj.disabled = true;
	});

	$btnRelojOcultar.addEventListener('click', e => {
		$spanReloj.innerHTML = null;
		clearInterval(time);
		$btnReloj.disabled = false;
	});
};

reloj();

// TODO: Alarma

const alarma = () => {
	$btnAlarma.addEventListener('click', e => {
		tiempo = setTimeout(() => {
			$audio.play();
		}, 1000);

		$btnAlarma.disabled = true;
	});

	$btnDetenerAlarma.addEventListener('click', e => {
		clearTimeout(tiempo);
		$audio.pause();
		$audio.currentTime = 0;
		$btnAlarma.disabled = false;
	});
};
alarma();
