// Ma solution
/*
accueil.addEventListener("click", function(){
	app.innerHTML = "<h2>Bienvenue sur le site Pong !</h2>"
});
jouer.addEventListener("click", function(){
	app.innerHTML = "<h2>Ici, on pourra lancer une partie.</h2>"
});
apropos.addEventListener("click", function(){
	app.innerHTML = "<h2>Projet ft_transcendence, École 42</h2>"
});
*/

// Correction
const accueilBtn = document.getElementById("accueil");
const jouerBtn = document.getElementById("jouer");
const aproposBtn = document.getElementById("apropos");
const app = document.getElementById("app");

window.onpopstate = (event) => {
	if (event.state) app.innerHTML = event.state.html;
};

function afficherVue(html, titre) {
	app.innerHTML = html;
	history.pushState({ html }, titre, "#" + titre);
}

accueilBtn.addEventListener("click", () => afficherVue( "<h2>Bienvenue sur le site Pong !</h2>", "accueil" ));
jouerBtn.addEventListener("click", () => afficherVue( "<h2>Ici, on pourra lancer une partie.</h2>", "Jouer"));
aproposBtn.addEventListener("click", () => afficherVue( "<h2>Projet ft_transcendence, École 42</h2>", "A propos"));

// Gerer historique navigateur