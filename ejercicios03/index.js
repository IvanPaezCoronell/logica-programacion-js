// TODO 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numAleatorio = (min = undefined, max = undefined) => {
	if (min && max === undefined)
		return console.error('El rango no esta definido!');

	if (typeof min != 'number')
		return console.error('El rango tiene que ser de tipo number !');

	if (typeof max != 'number')
		return console.error('El rango tiene que ser de tipo number !');

	let n = Math.random() * (max - min) + min;

	return console.log(Math.round(n));
};

numAleatorio(501, 600);

// TODO 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const nuemroCapicua = (numero = undefined) => {
	if (numero === undefined) return console.error('El numero no esta definido!');

	if (typeof numero != 'number')
		return console.error('el valor de numero tiene que ser de tipo number!');

	numeroToString = numero.toString().split('').reverse().join('');

	numeroStringToNumber = parseInt(numeroToString);

	return console.log(
		numero === numeroStringToNumber ? 'Es capicua' : 'No es capicua',
	);
};

nuemroCapicua(4004);

// TODO 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const calcularFactorial = (numero = undefined) => {
	if (numero === undefined) return console.error('El numero no esta definido!');

	if (typeof numero != 'number')
		return console.error('el valor de numero tiene que ser de tipo number!');

	if (numero === 0) return console.error('El valor de numero no puede ser 0!');

	if (Math.sign(numero) === -1)
		return console.error('El valor de numero no puede ser negativo!');

	let factorial = 1;

	for (let i = numero; i > 1; i--) {
		factorial = factorial * i;
	}

    return console.log(`El factorial de ${numero} es: ${factorial}`)
};

calcularFactorial(5)
