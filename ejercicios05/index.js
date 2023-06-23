// TODO 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
	if (numero === undefined) return console.error('El numero no esta definido!');

	if (typeof numero != 'number')
		return console.error('El valor del numero debe ser de tipo number!');

	if (base === undefined)
		return console.error('El valor de base no esta definido');

	if (typeof base != 'number')
		return console.error('El valor de la base debe ser de tipo number!');

	if (base === 2) {
		return console.log(`${numero} base = ${parseInt(numero, base)} base 10`);
	} else if (base === 10) {
		return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`);
	}
};

convertirBinarioDecimal(114, 10);

// TODO 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const costoTotal = (precio = undefined, descuento = undefined) => {
	if (precio === undefined) return console.error('El precio no esta definido!');

	if (precio === 0) return console.error('El precio no puede ser 0!');

	if (typeof precio != 'number')
		return console.error('El valor del precio debe ser de tipo number!');

	if (descuento === undefined)
		return console.error('El descuento no esta definido');

	if (typeof descuento != 'number')
		return console.error('El valor del descuento debe ser de tipo number!');

	let total = precio - precio * (descuento / 100);

	return console.log(total);
};

costoTotal(1000, 20);

// TODO 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularDias = (fecha = undefined) => {
	if (fecha === undefined) return console.error('La fecha no esta definido!');

	if (!(fecha instanceof Date))
		return console.log('El valor de fecha debe ser de tipo Date!');

	let conversion = new Date().getTime() - fecha.getTime();

	let aniosMilisegundos = 1000 * 60 * 60 * 24 * 365;

	let anios = Math.floor(conversion / aniosMilisegundos);

	return Math.sign(anios) === -1
		? console.log(
				`Faltan ${Math.abs(anios)} anios para el ${fecha.getFullYear()}`,
			)
		: Math.sign(anios) === 1
			? console.log(
					`Han pasado ${Math.abs(anios)} anios desde el ${fecha.getFullYear()}`,
				)
			: console.log(`Estamos en el anio actual ${fecha.getFullYear()}`);
};

calcularDias(new Date(2000, 0, 30));
