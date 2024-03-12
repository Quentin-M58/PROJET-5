
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const dots = document.querySelector(".dots");
const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
let nbdot = slides.length

for (let pas = 0; pas <= nbdot; pas++) {
	dots.innerHTML +=
		'<span id="dot' +
		(pas + 1) +
		'" class="dot" title="Image ' +
		(pas + 1) +
		'"></span>';
}
arrowleft.addEventListener("click", left)
arrowright.addEventListener("click", right)

function left(event) {
	alert("testleft");
}
function right(event) {
	alert("testright");
};
console.info("slides");
console.info(slides);
console.info("dots");
console.info(dots);
console.info("arrowleft");
console.info(arrowleft);
console.info("arrowright");
console.info(arrowright);
console.info("nbdot");
console.info(nbdot);
console.info("srcImage");
console.info(srcImage);



