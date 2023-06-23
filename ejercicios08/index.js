// TODO 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarArreglo = (arr = undefined) => {
	if (arr === undefined) return console.error('El arreglo no esta definido!');

	if (arr.length === 0) return console.error('El arreglo esta vacio!');

	if (!(arr instanceof Array))
		return console.error('El arreglo debe ser de tipo Array');

	for (const numero of arr) {
		if (typeof numero != 'number')
			return console.error(`El valor ${numero} debe ser de tipo number`);
	}

	let arrAsc = [...arr.sort((a, b) => a - b)];

	let arrDes = [...arr.sort((a, b) => b - a)];

	return console.log(arr), console.log(arrAsc, arrDes);
};

ordenarArreglo([7, 5, 7, 8, 6]);

// TODO 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados = (arr = undefined) => {
	if (arr === undefined) return console.error('El arreglo no esta definido!');

	if (arr.length === 0) return console.error('El arreglo esta vacio!');

	if (!(arr instanceof Array))
		return console.error('El arreglo debe ser de tipo Array');

	let newArr = arr.filter((item, index) => {
		return arr.indexOf(item) === index;
	});

	return console.log(arr, newArr);
};

eliminarDuplicados(['x', 10, 'x', 2, '10', 10, true, true]);

// TODO 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const calcularPromedio = (arr = undefined) => {
	if (arr === undefined) return console.error('El arreglo no esta definido!');

	if (arr.length === 0) return console.error('El arreglo esta vacio!');

	if (!(arr instanceof Array))
		return console.error('El arreglo debe ser de tipo Array');

	for (const numero of arr) {
		if (typeof numero != 'number')
			return console.error(`El valor ${numero} debe ser de tipo number`);
	}

	let suma = 0;

	for (let i = 0; i < arr.length; i++) {
		suma += arr[i];
		promedio = suma / arr.length;
	}

	return console.log(`El promedio es: ${promedio}`);
};

calcularPromedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
