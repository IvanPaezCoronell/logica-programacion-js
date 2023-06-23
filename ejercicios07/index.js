// TODO 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const elevarNumero = (arr = undefined) => {
	if (arr === undefined) return console.error('El array no esta definido!');

	if (arr.length === 0) return console.error('El array esta vacio!');

	if (!(arr instanceof Array))
		return console.error('El valor debe ser de tipo Array');

	for (const numero of arr) {
		if (typeof numero !== 'number') {
			return console.error(`El valor ${numero} debe ser de tipo number`);
		}
	}

	const newArr = arr.map(elemento => elemento * elemento);

	return console.log(
		`Arreglo original: ${arr} - Arreglo elevado al cuadrado: ${newArr}`,
	);
};

elevarNumero([1, 2, 3]);

// TODO 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const valorMaxMin = (arr = undefined) => {
	if (arr === undefined) return console.error('El array no esta definido!');

	if (arr.length === 0) return console.error('El array esta vacio!');

	if (!(arr instanceof Array))
		return console.error('El valor debe ser de tipo Array');

	for (const numero of arr) {
		if (typeof numero !== 'number') {
			return console.error(`El valor ${numero} debe ser de tipo number`);
		}
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);

	return console.log([max, min]);
};

valorMaxMin([1, 4, 5, 99, -60]);

// TODO 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const arrayParesImpares = (arr = undefined) => {
	if (arr === undefined) return console.error('El array no esta definido!');

	if (arr.length === 0) return console.error('El array esta vacio!');

	if (!(arr instanceof Array))
		return console.error('El valor debe ser de tipo Array');

	for (const numero of arr) {
		if (typeof numero !== 'number') {
			return console.error(`El valor ${numero} debe ser de tipo number`);
		}
	}

	let arrayPares = [];

	let arrayImpares = [];

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			arrayPares.push(i);
		} else if (i % 2 === 1) {
			arrayImpares.push(i);
		}
	}

	return console.log(arrayPares, arrayImpares);
};

arrayParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
