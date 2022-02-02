
const btn = document.querySelectorAll('.btn');
let count = 0; // Init count variable;

btn.forEach(function(btns) {
	btns.addEventListener('click', (e) => {
	const styles = btns.classList;
	const value = document.getElementById('value');
	if (styles.contains("increase")) {
		count++;
	}else if (styles.contains("reset")) {
		count = 0;
	}else if (styles.contains("decrease")) {
		count--;
	}

	if (count > 0) {
		value.style.color = 'green';
	}else if (count == 0) {
		value.style.color = 'black';
	}else if (count < 0) {
		value.style.color = 'red';
	}
	value.textContent = count;
	})
})
