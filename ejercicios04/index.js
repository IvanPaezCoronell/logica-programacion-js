// TODO 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const numeroPrimo = (numero = undefined) => {
	if (numero === undefined)
		return console.error('El valor de numero No puede estar vacio!');

	if (typeof numero != 'number')
		return console.error('El valor de numero debe ser de tipo number!');

	if (numero === 0) return console.error('El valor de numero no puede ser 0!');

	if (numero === 1) return console.error('El valor de numero no puede ser 1!');

	if (Math.sign(numero) === -1)
		return console.error('El valor de numero no puede ser negativo!');

	let divisible = false;

	for (let i = 2; i < numero; i++) {
		if (numero % i === 0) {
			divisible = true;
			break;
		}
	}

	return divisible ? console.log('NO es primo') : console.log('Es primo');
};

numeroPrimo(7);

// TODO 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (numero = undefined) => {
	if (numero === undefined)
		return console.error('El valor de numero No puede estar vacio!');

	if (typeof numero != 'number')
		return console.error('El valor de numero debe ser de tipo number!');

	if (numero === 0) return console.error('El valor de numero no puede ser 0!');

	if (Math.sign(numero) === -1)
		return console.error('El valor de numero no puede ser negativo!');

	for (let i = 0; i < numero; i++) {
		if (numero % 2 === 0) {
			console.log(`El numero "${numero}" es Par`);
			break;
		} else {
			console.log(`El numero "${numero}" es Impar`);
			break;
		}
	}

	return numero;
};

parImpar(201);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (grados = undefined, unidad = '') => {
	if (grados === undefined)
		return console.error('El valor de grado No puede estar vacio!');

	if (typeof grados != 'number')
		return console.error('El valor del grado debe ser de tipo number!');

	if (!unidad) return console.error('El valor de unidad No puede estar vacio!');

	if (typeof unidad != 'string')
		return console.error('El valor de la unidad debe ser de tipo string!');

	let conversion;

	if (unidad.toLowerCase() === 'c') {
		conversion = grados * 9 / 5 + 32;
		console.log(`${grados}°C = ${conversion}°F`);
	} else if (unidad.toLowerCase() === 'f') {
		conversion = (grados - 32) * 5 / 9;
		console.log(`${grados}°F = ${conversion}°C`);
	}

	return console.log(conversion);
};

convertirGrados(0, 'C');
