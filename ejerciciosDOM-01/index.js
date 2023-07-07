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
	console.log(window.scrollY);
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
