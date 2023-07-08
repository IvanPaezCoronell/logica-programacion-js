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

// Variables eventos con el teclado
const $rectangulo = document.querySelector('#rectangulo');
const $circulo = document.querySelector('#circulo');

// Variables contador
const $cont = document.querySelector('#contador');

// Variables boton scrollTop
const $btnScroll = document.querySelector('#idBtnScroll');

// Variables boton darkMode
const $btnDarkMode = document.querySelector('#idDarkMode');
const $body = document.body;
const $emojiBtn = document.querySelector('#spanEmoji');

// Variables Responsive Design
const $divSectionCuatro = document.querySelector('#divSection04');
const $spanVideo = document.querySelector('#spanVideo');
const $spanImg = document.querySelector('#spanImg');

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

// TODO: Eventos con el teclado - mover un div con el teclado y agregar shorcut para generar alerta

const shorcuts = () => {
	document.addEventListener('keyup', e => {
		if (e.key === 'a' && e.ctrlKey) {
			alert('Alerta creada con un shorcut');
		} else if (e.key === 'c' && e.ctrlKey) {
			confirm('Confirmacion creada con un shorcut');
		} else if (e.key === 'm' && e.ctrlKey) {
			prompt('Propm creado con un shorcut');
		}
	});
};
shorcuts();

const moverCirculo = () => {
	let x = 0;
	let y = 0;

	document.addEventListener('keydown', e => {
		const limiteRectangulo = $rectangulo.getBoundingClientRect();
		const limiteCirculo = $circulo.getBoundingClientRect();

		switch (e.keyCode) {
			case 37:
				if (limiteCirculo.left > limiteRectangulo.left) {
					x--;
					e.preventDefault();
				}

				break;

			case 38:
				if (limiteCirculo.top > limiteRectangulo.top) {
					y--;
					e.preventDefault();
				}

				break;

			case 39:
				if (limiteCirculo.right < limiteRectangulo.right) {
					x++;
					e.preventDefault();
				}
				break;

			case 40:
				if (limiteCirculo.bottom < limiteRectangulo.bottom) {
					y++;
					e.preventDefault();
				}
				break;

			default:
				break;
		}

		$circulo.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
	});
};

moverCirculo();

// TODO: Contador
const contador = () => {
	document.addEventListener('DOMContentLoaded', e => {
		let fechaFinal = new Date('Dec 31, 2023 23:59:59');
		let fechaHoy = new Date(fechaFinal).getTime();
		let mensaje = 'Feliz Anio Nuevo 2024 🎆';

		let setFecha = setInterval(() => {
			let hoy = new Date().getTime();
			let limiteTiempo = fechaHoy - hoy;

			let dias = Math.floor(limiteTiempo / (1000 * 60 * 60 * 24));
			let horas = ('0' +
				Math.floor(
					limiteTiempo % (1000 * 60 * 60 * 24) / (1000 * 60 * 60),
				)).slice(-2);
			let minutos = ('0' +
				Math.floor(limiteTiempo % (1000 * 60 * 60) / (1000 * 60))).slice(-2);
			let segundos = ('0' +
				Math.floor(limiteTiempo % (1000 * 60) / 1000)).slice(-2);

			$cont.innerHTML = `Faltan: ${dias} Dias - ${horas} Horas - ${minutos} minutos - ${segundos} segundos`;

			if (limiteTiempo < 0) {
				clearInterval(setFecha);
				$cont.innerHTML = mensaje;
			}
		}, 1000);
	});
};

contador();

// TODO: Boton ScrollTop

window.onscroll = () => {
	if (window.scrollY > 300) {
		$btnScroll.style.setProperty('visibility', 'visible');
	} else if (window.scrollY < 300) {
		$btnScroll.style.setProperty('visibility', 'hidden');
	}
};

const scrollTop = () => {
	$btnScroll.addEventListener('click', e => {
		window.scrollTo(0, document.body.scrollTop);
	});
};

scrollTop();

// TODO: boton darkMode

const darkMode = () => {
	let moon = '🌓';
	let soon = '☀️';
	let darkMode = localStorage.getItem('dark-mode');

	const activarDarkMode = () => {
		$emojiBtn.innerHTML = soon;
		$body.classList.add('darkMode');
		$rectangulo.style.setProperty('background-color', 'rgb(71, 67, 86)');
		localStorage.setItem('dark-mode', 'enabled');
	};

	const desactivarDarkMode = () => {
		$emojiBtn.innerHTML = moon;
		$body.classList.remove('darkMode');
		$rectangulo.style.setProperty('background-color', 'black');
		localStorage.setItem('dark-mode', 'disabled');
	};

	if (darkMode === 'enabled') {
		activarDarkMode();
	}

	$btnDarkMode.addEventListener('click', e => {
		darkMode = localStorage.getItem('dark-mode');

		if (darkMode === 'disabled') {
			activarDarkMode();
		} else {
			desactivarDarkMode();
		}
	});
};

darkMode();

// TODO: Responsive Design con JavaScript

const responsiveDesgin = () => {
	let maxWidth = window.matchMedia('(max-width: 700px)');

	const responsive = e => {
		if (maxWidth.matches === true) {
			$spanVideo.innerHTML = `<a href='https://www.youtube.com/watch?v=odnLWsAe3lM&t=8s' class='linkSectionCuatro'>Video: JavaScript en 2 minutos ➡️</a>`;
			$spanImg.innerHTML = `<a href='https://goo.gl/maps/hyphRPNUXNXi4U9p9' class='linkSectionCuatro'>Mapa: Ver mapa en Google Maps ➡️</a>`;
		} else {
			$spanImg.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.29748245331!2d-74.83800730631775!3d11.014271627109553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c4d31832a7f%3A0xacfa59f8b5bbd98b!2sCl.%2099%2C%20Riomar%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1688835092307!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
			$spanVideo.innerHTML = `<video src='./assets/jsVideo.mp4' controls></video>`;
		}
	};

	maxWidth.addListener(responsive);
	responsive(maxWidth);
};
responsiveDesgin();
