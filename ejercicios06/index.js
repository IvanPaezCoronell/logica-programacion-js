// TODO 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarVocalesConsonantes = (cadena = '') => {
	if (!cadena) return console.error('La cadena no esta definida!');

	if (typeof cadena != 'string')
		return console.error('La cadena debe ser de tipo string!');

	let vocales = 'aáeéiíoóuú';
	let consonantes = 'bcdfghjklmnñpqrstvxzw';

	let nVocales = 0;
	let nConsonantes = 0;

	for (let letra of cadena) {
		if (vocales.includes(letra.toLowerCase())) {
			nVocales++;
		} else if (consonantes.includes(letra.toLowerCase())) {
			nConsonantes++;
		}
	}

	return console.log(
		`El texto tiene ${nVocales} vocales y ${nConsonantes} consonantes.`,
	);
};

contarVocalesConsonantes('Hola MuNdo ');

// TODO 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = '') => {
	if (!nombre) return console.error('El nombre esta vacio!');

	if (typeof nombre !== 'string')
		return console.error('El valor de nombre debe ser de tipo string!');

	let expRegNombre = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'°\s]+$/g.test(nombre);

	return expRegNombre
		? console.log(`"${nombre}", es un nombre valido`)
		: console.warn(`"${nombre}", NO es un nombre valido`);
};

validarNombre('Ivan Paez');

// TODO 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = '') => {
	if (!email) return console.error('El email esta vacio!');

	if (typeof email !== 'string')
		return console.error('El valor de email debe ser de tipo string!');

	let expRegEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/gi.test(
		email,
	);

	return expRegEmail
		? console.log(`"${email}", es un email valido.`)
		: console.error(`"${email}", NO es un email valido.`);
};

validarEmail('paez@gmail.com');
