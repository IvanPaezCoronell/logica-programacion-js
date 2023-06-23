// TODO 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.

//  Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
	constructor({ id, titulo, director, anio, pais, generos, calificacion }) {
		(this.id = id), (this.titulo = titulo), (this.director = director), (this.anio = anio), (this.pais = pais), (this.generos = generos), (this.calificacion = calificacion), this.validarIMDB(
			id,
		), this.validarTitulo(titulo), this.validarDirector(
			director,
		), this.validarAnio(anio), this.validarPais(pais), this.validarGeneros(
			generos,
		), this.validarCalificacion(calificacion);
	}

	static get listaGeneros() {
		return [
			'Action',
			'Adult',
			'Adventure',
			'Animation',
			'Biography',
			'Comedy',
			'Crime',
			'Documentary',
			'Drama',
			'Family',
			'Fantasy',
			'Film Noir',
			'Game-Show',
			'History',
			'Horror',
			'Musical',
			'Music',
			'Mystery',
			'News',
			'Reality-TV',
			'Romance',
			'Sci-Fi',
			'Short',
			'Sport',
			'Talk-Show',
			'Thriller',
			'War',
			'Western',
		];
	}

	static generosAceptados() {
		return console.info(
			`Los generos aceptados son ${Pelicula.listaGeneros.join(', ')}`,
		);
	}

	validarCadena(propiedad, valor) {
		if (!valor) return console.error(`${propiedad} "${valor} esta vacio!"`);

		if (typeof valor != 'string')
			return console.error(`${propiedad} "${valor}" NO es de tipo string!`);

		return true;
	}

	validarLongitudCadena(propiedad, valor, longitud) {
		if (valor.length > longitud)
			return console.error(
				`${propiedad} "${valor}" excede el numero de caracteres permitidos [${longitud}]`,
			);
	}

	validarNumero(propiedad, valor) {
		if (!valor) return console.error(`${propiedad} "${valor}" esta vacio!`);

		if (typeof valor !== 'number')
			return console.error(`${propiedad} "${valor}" NO es un numero!`);

		return true;
	}

	validarArreglo(propiedad, valor) {
		if (!valor) return console.error(`${propiedad} "${valor}" esta vacio!`);

		if (!(valor instanceof Array))
			return console.error(`${propiedad} "${valor}" NO es un arreglo`);

		if (valor.length === 0)
			return console.error(
				`${propiedad} "${valor}" El arreglo NO tiene datos!`,
			);

		for (const cadena of valor) {
			if (typeof cadena !== 'string')
				return console.error(`El valor "${cadena}" NO es una cadena de texto!`);
		}
		return true;
	}

	// Validar que el id contenga 9 valores y que los dos primeros valores sean letra y el resto numeros
	validarIMDB(id) {
		if (this.validarCadena('IMDB id', id))
			if (!/^([a-z]){2}([0-9]){7}$/.test(id)) {
				return console.error(
					`IMDB id ${id} NO es valido, debe tener 9 caracteres, las dos primeras letras minusculas, los 7 restantes numero!`,
				);
			}
		return true;
	}

	validarTitulo(titulo) {
		if (this.validarCadena('Titulo', titulo))
			this.validarLongitudCadena('Titulo', titulo, 100);
	}

	validarDirector(director) {
		if (this.validarCadena('Director', director))
			this.validarLongitudCadena('Director', director, 50);
	}

	validarAnio(anio) {
		if (this.validarNumero('anio', anio))
			if (!/^([0-9]){4}$/.test(anio)) {
				return console.error(
					`Anio de estreno "${anio}" NO es valido, debe ser un numero de 4 digitos!`,
				);
			}
	}

	validarPais(pais) {
		this.validarArreglo('Pais', pais);
	}

	validarGeneros(generos) {
		if (this.validarArreglo('Generos', generos)) {
			for (let genero of generos) {
				if (!Pelicula.listaGeneros.includes(genero)) {
					console.error(`Genero(s) incorrectos "${generos.join(', ')}"`);
					Pelicula.generosAceptados();
				}
			}
		}
	}

	validarCalificacion(calificacion) {
		if (this.validarNumero('Calificacion', calificacion))
			return calificacion < 0 || calificacion > 10
				? console.error('La calificacion debe ser un numero entre 0 y 10!')
				: (this.calificacion = calificacion.toFixed(1));
	}

	fichaTecnica() {
		console.info(
			`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this
				.director}"\nAnio: "${this.anio}"\nPais: "${this.pais.join(
				' - ',
			)}"\nGenero: "${this.generos.join(' - ')}"\nCalificacion: "${this
				.calificacion}"\nId: "${this.id}"`,
		);
	}

	// get getId() {
	// 	return this.id;
	// }

	// get getTitulo() {
	// 	return this.titulo;
	// }

	// get getDirector() {
	// 	return this.director;
	// }

	// get getAnio() {
	// 	return this.anio;
	// }

	// get getPais() {
	// 	return this.pais;
	// }

	// get getGeneros() {
	// 	return this.generos;
	// }

	// get getCalificacion() {
	// 	return this.calificacion;
	// }

	// set setId(id) {
	// 	this.id = id;
	// }

	// set setTitulo(titulo) {
	// 	this.titulo = titulo;
	// }

	// set setDirector(director) {
	// 	this, (director = director);
	// }

	// set setAnio(anio) {
	// 	this.anio = anio;
	// }

	// set setPaes(pais) {
	// 	this.pais = pais;
	// }

	// set setGeneros(generos) {
	// 	this.generos = generos;
	// }

	// set setCalificacion(calificacion) {
	// 	this.calificacion = calificacion;
	// }
}

const listaPeliculas = [
	{
		id: 'tt0848228',
		titulo: 'The Avengers',
		director: 'Joss Whedon',
		anio: 2012,
		pais: ['Mexico'],
		generos: ['Action', 'Sci-Fi'],
		calificacion: 8.677,
	},
	{
		id: 'tt3498820',
		titulo: 'Capitan America: Civil War',
		director: 'Anthony Russo',
		anio: 2016,
		pais: ['Estados Unidos'],
		generos: ['Action'],
		calificacion: 7.8,
	},
	{
		id: 'tt3501632',
		titulo: 'Thor: Ragnarok',
		director: 'Taika Waititi',
		anio: 2017,
		pais: ['Inglaterra'],
		generos: ['Action', 'Adventure', 'Comedy'],
		calificacion: 7.9,
	},
];

listaPeliculas.forEach(elemento => new Pelicula(elemento).fichaTecnica());
