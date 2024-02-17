const coverElement = document.getElementById('cover-img');
const covers = [
	'/covers/1.webp',
	'/covers/2.webp',
	'/covers/3.jpg',
	'/covers/4.jpg'
];

function loadCover() {

	const index = parseInt(localStorage.cover);
	const isValidIndex = !isNaN(index) && index < covers.length;
	coverElement.src = covers[isValidIndex ? index : 0];

}

function changeCover() {

	if (!localStorage.cover) {
		localStorage.cover = 0;
	}

	const index = parseInt(localStorage.cover);
	const isValidIndex = index + 1 >= covers.length;
	localStorage.cover = isValidIndex ? 0 : index + 1;
	loadCover();

}

coverElement.onclick = changeCover;
loadCover();
