// TODO 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirTexto = (cadena = '') => {
	if (!cadena) return console.error('La cadena esta vacia!');

	if (typeof cadena != 'string')
		return console.error('La cadena tiene que ser de tipo string!');

	return console.log(cadena.split('').reverse().join(''));
};

invertirTexto('Hola mundo');

// TODO 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabra = (cadena = '', palabra = '') => {
	if (!cadena) return console.error('La cadena esta vacia!');

	if (typeof cadena != 'string')
		return console.error('La cadena tiene que ser de tipo string!');

	if (!palabra) return console.error('La palabra esta vacia!');

	if (typeof palabra != 'string')
		return console.error('La palabra tiene que ser de tipo string!');

	let nPalabra = 0;
	let i = 0;

	while (i !== -1) {
		i = cadena.indexOf(palabra, i);

		if (i !== -1) {
			i++;
			nPalabra++;
		}
	}

	return console.log(
		`La palabra ${palabra} se repite ${nPalabra} en el texto.`,
	);
};

contarPalabra('hola mundo adios mundo', 'mundo');

// TODO 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (cadena = '') => {
	if (!cadena) return console.error('La cadena esta vacia!');

	if (typeof cadena != 'string')
		return console.error('La cadena tiene que ser de tipo string!');

	let expReg = /[\W_]/g; // \W elimina los cararcteres diferentes a letras y numeros

	cadenaConvertida = cadena.toLowerCase().replace(expReg, '');

	conversion = cadenaConvertida.split('').reverse().join('');

	return console.log(
		conversion === cadenaConvertida
			? `La palabra y/o texto "${cadena}" es palindromo`
			: 'No es palindromo',
	);
};

palindromo('Dabale arroz a la zorra el abad');

// TODO 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarPatron = (cadena = '', patron = '') => {
	if (!cadena) return console.error('La cadena esta vacia!');

	if (typeof cadena != 'string')
		return console.error('La cadena tiene que ser de tipo string!');

	if (!patron) return console.error('El patron esta vacia!');

	if (typeof patron != 'string')
		return console.error('El patron tiene que ser de tipo string!');

	let nuevaCadena = cadena.replaceAll(patron, '', 'gi');
	return console.log(nuevaCadena);
};

eliminarPatron('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');
