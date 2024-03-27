//tableau
const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

//constant
// valeur nombre element dans slides
let nbElement = slides.length;
// numero du premier dot
let numDot = 1;
//selection de la fleche de gauche
const arrowLeft = document.querySelector(".arrow_left");
//selection de la fleche de droite
const arrowRight = document.querySelector(".arrow_right");
//selection de la classe de "dots"
const dots = document.querySelector(".dots");

//boucle
//pour la valeur "pas" commence a 1; jusqu'à inferieur/egal, additionne
//insere le texte dans le html dans la classe "dots"
//text = <span id="dot$pas$" class="dot" title="Image$pas$"></span>
for (let pas = 1; pas <= nbElement; pas++) {
	dots.innerHTML +=
		'<span id="dot' +
		pas +
		'" class="dot" title="Image ' +
		pas +
		'"></span>';
}
//constant
//selectionne tous element de la classe "dots"  
const dotList = document.querySelectorAll(".dot");

//action
//selectionne le premier dot (numero 0) et applique la classe "dot_selected"
dotList[0].classList.add("dot_selected");

//evenement
//au click sur la fleche de gauche
//si la position est inferieur à 1
//retourne a la fin
//sinon soustrai 
arrowLeft.addEventListener("click", () => {
	if (numDot <= 1) {
		numDot = nbElement;
	} else {
		numDot--;
	};
	defilement(numDot);
});

//evenement
//au click sur la fleche de gauche
//si la position est superieur ou egla a nombre element
//retourne au debut
//sinon additionne 
arrowRight.addEventListener("click", () => {
	if (numDot >= nbElement) {
		numDot = 1;
	} else {
		numDot++;
	}
	defilement(numDot);
});

//evenement
//au click sur un des "dot"
//si l'id (dot'numero') du dot n'est pas vide ou egal a 0
//recupere le numero du "dot"
//defini numdot egal au numero du "dot"
//execute defilement(numDot)
dots.addEventListener("click", (e) => {
	if (e.target.id != "" && e.target.id != null) {
		numDot = parseInt(e.target.id.substring(3));
	}
	defilement(numDot);
});

function defilement(counter) {

	//enleve la classe "dot_selected" de tous le monde
	dotList.forEach(dot => dot.classList.remove("dot_selected"));

	//met la classe "dot_selected" au dot selectionner
	dotList[counter - 1].classList.add("dot_selected");

	//valeur
	//selectionne la classe de l'image arriere plan 
	let bannerImg = document.querySelector(".banner-img");
	//selectionne la classe du texte 
	let bannerText = document.querySelector("#banner p");

	//modifie l'emplacement de l'image avec le numero selectionner
	bannerImg.src = "./assets/images/slideshow/" + slides[counter - 1].image;

	//modifie le texte avec le numero selectionner
	bannerText.innerHTML = slides[counter - 1].tagLine;
}