const $main = document.querySelector('main');
const $links = document.querySelector('.links');
const $fragment = document.createDocumentFragment();

let pokeApi = 'https://pokeapi.co/api/v2/pokemon/';


async function getPokemons(url) {
	try {
		$main.innerHTML = `<img class='loader' src="./assets/loader.svg">`;

		let response = await fetch(url);
		let resJson = await response.json();

		if (!response.ok)
			throw {
				status: response.status,
				statusText: response.statusText,
			};

		let $template = '',
			$prevLink,
			$nextLink;

		for (let i = 0; i < resJson.results.length; i++) {
			const element = resJson.results[i];
			console.log(element);

			try {
				let res = await fetch(resJson.results[i].url);

				let pokemon = await res.json();

				if (!response.ok)
					throw {
						status: response.status,
						statusText: response.statusText,
					};

				$template += `
        <figure>
          <img src='${pokemon.sprites.front_default}' alt='${pokemon.name}'>
          <figcaption>${pokemon.name}</figcaption>
        </figure>
        `;

				console.log(pokemon);
			} catch (err) {
				let messageError = err.statusText || 'Ocurrio un orblema';
				$template += `
        <figure>
          <figcaption>ERROR ${err.status}: ${messageError}</figcaption>
        </figure>
        `;
			}
		}

		$main.innerHTML = $template;

		$prevLink = resJson.previous ? `<a href='${resJson.previous}'>⬅️</a>` : '';
		$nextLink = resJson.next ? `<a href='${resJson.next}'>➡️</a>` : '';

		$links.innerHTML = $prevLink + '' + $nextLink;
		console.log(resJson);
	} catch (err) {
		let messageError = err.statusText || 'Ocurrio un problema';
		$main.innerHTML = `<p>ERROR ${err.status}: ${messageError}</p>`;
	}
}

document.addEventListener('DOMContentLoaded', e => getPokemons(pokeApi));

document.addEventListener('click', e => {
	if (e.target.matches('.links a')) {
		e.preventDefault();

		getPokemons(e.target.getAttribute('href'));
	}
});
