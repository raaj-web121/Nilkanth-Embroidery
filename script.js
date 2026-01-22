
const header = document.querySelector("header");


window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);
} );

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav-list');

menu.onclick =() => {
	menu.classList.toggle('bx-x');
	nav.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	nav.classList.remove('open');
};

const sr = ScrollReveal ({
	distance:'30px',
	duration: 2600,
	reset: true
})

sr.reveal('.home-text', {delay:280, origin:'bottom'});
sr.reveal('.featured, .cta, .new, .brand, .contact', {delay:200, origin:'bottom'});  




