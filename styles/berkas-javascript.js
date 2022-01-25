const menuToggle = document.querySelector('.dropdown input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
	nav.classList.toggle('slide');
})