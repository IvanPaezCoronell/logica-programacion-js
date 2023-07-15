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

// Variables Responsive Tester
const $form = document.getElementById('form');
const $inputUrl = document.querySelector('#inputUrl').value;

// Variables Deteccion del dispositivo actual
const $userDevice = document.querySelector('#userDevice');

// Variables Deteccion del estado de la red
const $estadoRed = document.querySelector('#estadoRed');

// Variables Deteccion de la webcam
const $webcam = document.querySelector('#webcam');

// Variables Deteccion de la Geolocalizacion
const $geo = document.querySelector('#geolocalizacion');
const $linkMapGeo = document.querySelector('#linkMapGeo');

// Variables Puntuacion con estrellas
const $rating = document.querySelector('#rating');

// Variables Filtros de Busquedas
const $cardFilter = document.querySelector('.cardFilter');

// Variables Sorteo Digital
const $divLista = document.querySelector('#listaSorteo');
const $ulSorteo = document.createElement('ul');
const $btnSorteo = document.querySelector('#btnSorteo');
const usuarios = [
	'Ivan',
	'Ana',
	'Juan',
	'Camila',
	'Sebastian',
	'Andrea',
	'David',
	'Luis',
	'Sofia',
];

// Variables Responsive Slider
const $btnLeft = document.querySelector('#btnLeft');
const $btnRight = document.querySelector('#btnRight');
const $cardSlider = document.querySelectorAll('#slide');

// Variables Video Inteligente
const $videoBarca = document.querySelectorAll('video[data-smart-video]');

// Variables Lector de voz
const $speechSelect = document.querySelector('#speech-select');
const $speechTextArea = document.querySelector('#speech-text');
const $speechBtn = document.querySelector('#speech-btn');

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

// TODO: Responsive Tester
let tester;

const abrirUrl = () => {
	document.addEventListener('submit', e => {
		e.preventDefault();
		if (e.target === $form) {
			e.preventDefault();
			tester = window.open(
				$form.url.value,
				'tester',
				`innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`,
			);
		}
	});

	document.addEventListener('click', e => {
		if (e.target === $form.cerrar) {
			tester.close();
		}
	});
};

// TODO: Detectar Dispositivo Actual

const detectarDispositivo = () => {
	const n = navigator;
	const ua = n.userAgent;

	const isMobile = {
		android: () => ua.match(/android/i),
		ios: () => ua.match(/iphone|ipad/i),
		any: function() {
			return this.android() || this.ios();
		},
	};

	const isDesktop = {
		linux: () => ua.match(/linux/i),
		mac: () => ua.match(/mac os/i),
		windows: () => ua.match(/windows nt/i),
		any: function() {
			return this.linux() || this.mac() || this.windows();
		},
	};

	const isBrowser = {
		chrome: () => ua.match(/chrome/i),
		safari: () => ua.match(/safari/i),
		firefox: () => ua.match(/firefox/i),
		opera: () => ua.match(/opera|opera mini/i),
		ie: () => ua.match(/msie|iemobile/i),
		edge: () => ua.match(/edge/i),
		any: function() {
			return (
				this.chrome() ||
				this.safari() ||
				this.firefox() ||
				this.opera() ||
				this.ie() ||
				this.edge()
			);
		},
	};

	$userDevice.innerHTML = `
	<ul>
		<li>User Agent: ${ua}</li>
		<li>Dispositivo: ${isMobile.any() ? isMobile.any() : isDesktop.any()} </li>
		<li>Navegador: ${isBrowser.any()}</li>
	</ul>`;
};
detectarDispositivo();

// TODO: Detectar el estado de la conexion (Red)

const detectarEstadoRed = () => {
	setInterval(() => {
		$estadoRed.innerHTML = `${navigator.onLine ? 'Online' : 'Offline'}`;

		if (navigator.onLine) {
			$estadoRed.classList.add('online');
			$estadoRed.classList.remove('offline');
		} else {
			$estadoRed.classList.add('offline');
		}
	}, 1000);
};
detectarEstadoRed();

// TODO: Detectar la Camara Web (Webcam)

// const detectarCamara = () => {
// 	if (navigator.mediaDevices.getUserMedia) {
// 		navigator.mediaDevices
// 			.getUserMedia({ video: true, audio: true })
// 			.then(stream => {
// 				$webcam.srcObject = stream;
// 				$webcam.play();
// 			})
// 			.catch(
// 				err => (
// 					$webcam.insertAdjacentHTML(
// 						'beforebegin',
// 						`<p><mark>${err}</mark></p>`,
// 					),
// 					console.error(`Ha ocurrido un error! {${err}}`)
// 				),
// 			);
// 	}
// };

// detectarCamara();

// TODO: Detectar la Geolocalizacion

const obtenerGeolocalizacion = () => {
	navigator.geolocation.getCurrentPosition(position => {
		const latitud = position.coords.latitude;
		const longitud = position.coords.longitude;
		$geo.innerHTML = `<h4>Posicion Actual ⬇️</h4><h5>Latitud: <mark>${latitud}</mark> </h5>  <h5>Longitud: <mark>${longitud}</mark> </h5> `;

		$linkMapGeo.innerHTML = `<a href='https://www.google.com/maps/@${latitud},${longitud}' class='aMaps' target='_blank'>Visitar en Google Maps</a>`;
	});
};

obtenerGeolocalizacion();

// TODO: Puntuacion con estrellas (⭐⭐☆☆☆)

const crearRating = ({ rating, total = 5, star = '⭐', emptyStar = '☆' }) => {
	const stars = star.repeat(rating);
	const empty = emptyStar.repeat(total - rating);

	$rating.innerHTML = stars + empty;
};

crearRating({ rating: 2 });

// TODO: Filtros de Busqueda

const filtros = () => {
	document.addEventListener('keyup', e => {
		if (e.target === $cardFilter) {
			console.log(e.key);

			if (e.key === 'Escape') {
				e.target.value = '';
			}

			document
				.querySelectorAll('.card')
				.forEach(
					el =>
						el.textContent.toLocaleLowerCase().includes(e.target.value)
							? el.classList.remove('filter')
							: el.classList.add('filter'),
				);
		}
	});
};

filtros();

// TODO: Sorteo Digital

const sorteoDigital = () => {
	usuarios.map(el => {
		const $li = document.createElement('li');
		$li.textContent = el;
		$divLista.appendChild($li);
	});

	$btnSorteo.addEventListener('click', e => {
		const ganador = usuarios[Math.floor(Math.random() * usuarios.length)];

		alert(`El ganador es: [ ${ganador} ]`);
	});
};

sorteoDigital();

// TODO: Responsive Slider

const slider = () => {
	let i = 0;

	$btnLeft.addEventListener('click', e => {
		if (e.target === $btnLeft) {
			e.preventDefault();
			$cardSlider[i].classList.remove('active');
			i--;

			if (i < 0) {
				i = $cardSlider.length - 1;
			}

			$cardSlider[i].classList.add('active');
		}
	});

	$btnRight.addEventListener('click', e => {
		if (e.target === $btnRight) {
			e.preventDefault();
			$cardSlider[i].classList.remove('active');
			i++;

			if (i >= $cardSlider.length) {
				i = 0;
			}

			$cardSlider[i].classList.add('active');
		}
	});
};

slider();

// TODO: Video inteligente (IntersectionObserver)

const videoInteligente = () => {
	const cb = entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.play();
			} else {
				entry.target.pause();
			}
		});
	};

	const observer = new IntersectionObserver(cb, { threshold: 0.5 });

	$videoBarca.forEach(el => observer.observe(el));
};

videoInteligente();

// TODO: Validaciones de Formularios

const $formValidation = document.querySelector('#formValidation');

const validaciones = () => {
	const $form = document.querySelector('.contact-form');
	const $inputs = document.querySelectorAll('.contact-form [required]');

	// Crea el elemento Span
	$inputs.forEach(input => {
		const $span = document.createElement('span');
		$span.id = input.name;
		$span.textContent = input.title;
		$span.classList.add('contact-form-error', 'none');
		input.insertAdjacentElement('afterend', $span);
	});

	document.addEventListener('keyup', e => {
		if (e.target.matches('.contact-form [required]')) {
			let $input = e.target;
			let pattern = $input.pattern || $input.dataset.pattern; // Traer el atributo pattern del textArea

			if (pattern && $input.value !== '') {
				console.log('patron');
				let regEx = new RegExp(pattern);
				return !regEx.exec($input.value)
					? document.getElementById($input.name).classList.add('is-active')
					: document.getElementById($input.name).classList.remove('is-active');
			}

			if (!pattern) {
				console.log('no patron');
				return $input.value === ''
					? document.getElementById($input.name).classList.add('is-active')
					: document.getElementById($input.name).classList.remove('is-active');
			}
		}
	});

	document.addEventListener('submit', e => {
		const data = Object.fromEntries(new FormData(e.target));

		const $loader = document.querySelector('.contact-form-loader');
		const $response = document.querySelector('.contact-form-response');

		$loader.classList.remove('none');

		setTimeout(() => {
			$loader.classList.add('none');
			$response.classList.remove('none');
			$form.reset();

			setTimeout(() => {
				$response.classList.add('none');
			}, 3000);
		}, 3000);

		console.log(JSON.stringify(data));
	});
};

validaciones();

// TODO: Narrador (Lector de Voz)

const leerTexto = () => {
	const speechMessage = new SpeechSynthesisUtterance();

	let voices = [];

	document.addEventListener('DOMContentLoaded', e => {
		window.speechSynthesis.addEventListener('voiceschanged', e => {
			voices = window.speechSynthesis.getVoices();

			voices.map(voice => {
				const $option = document.createElement('option');
				$option.value = voice.name;
				$option.text = voice.name;

				$speechSelect.appendChild($option);
			});
		});
	});

	document.addEventListener('change', e => {
		if (e.target === $speechSelect) {
			speechMessage.voice = voices.find(voice => voice.name === e.target.value);
		}
	});

	document.addEventListener('click', e => {
		if (e.target === $speechBtn) {
			speechMessage.text = $speechTextArea.value;
			window.speechSynthesis.speak(speechMessage);
		}
	});
};

leerTexto();
