// TODO 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contarCaracteres = (cadena = '') => {
	if (!cadena) return console.error('La cadena no esta definida!');

	if (typeof cadena != 'string') return console.error('La cadena tiene que ser de tipo string');

	let nCaracteres = 0;

	for (let i = 0; i < cadena.length; i++) {
		nCaracteres++;
	}

	return console.log(`La cadena tiene ${nCaracteres} caracteres.`);
};

contarCaracteres('Hola mundo');

// TODO 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortarTexto = (cadena = '', longitud = undefined) => {
	if (!cadena) return console.error('La cadena no esta definida!');

	if (typeof cadena != 'string') return console.error('La cadena tiene que ser de tipo string');

	if (longitud === undefined) return console.error('La longitud no esta definida!');

	if (typeof longitud != 'number') return console.error('La longitud tiene que ser de tipo number');

	return console.log(cadena.slice(0, longitud));
};

recortarTexto('Hola mundo', 4);

// TODO 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const stringToArray = (cadena = '') => {
	if (!cadena) return console.error('La cadena no esta definida!');

	if (typeof cadena != 'string') return console.error('La cadena tiene que ser de tipo string');

	return console.log(cadena.split(' '));
};

stringToArray('Hola que tal');

// TODO 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetirTexto = (cadena = '', x = undefined) => {
	if (!cadena) return console.error('La cadena no esta definida!');

	if (typeof cadena != 'string') return console.error('La cadena tiene que ser de tipo string');

	if (x === undefined) return console.error('x no esta definida!');

	if (typeof x != 'number') return console.error('x tiene que ser de tipo number');

	return console.log(cadena.repeat(x));
};

repetirTexto('Hola mundo ', 3);
