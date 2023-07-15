const $panel = document.querySelector('#panel');
const $buttons = document.querySelectorAll('.btns button');

for (const button of $buttons) {
	button.addEventListener('click', e => {
    console.log(e.target.dataset.key)
		if (e.target.dataset.key == 'equal') {
			$panel.textContent = eval($panel.textContent);
			if ($panel.textContent.length > 8) {
				$panel.textContent = eval($panel.textContent).toFixed(4);
			}
		} else if (e.target.dataset.key == 'clear') {
			$panel.textContent = '';
		} else {
			$panel.textContent = $panel.textContent + e.target.dataset.key;
		}
	});
}

