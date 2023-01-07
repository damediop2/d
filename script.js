const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function changeColor() {
	const body = document.querySelector('body');
	const color = colors[Math.floor(Math.random() * colors.length)];
	body.style.backgroundColor = color;
}

setInterval(changeColor, 5000);
