//alert("I'm Javascript from external script!");
// let name = "John";
// let admin = name ;
// alert(name);

// let planetName, currentUserName;
// const userName = prompt("What is your name?", "noname");
// alert (`Your name is ${userName}`);
let nom, age, estEtudiant = true;
nom = prompt("Quel est ton nom?");
age = +prompt("Quel est ton age?");
alert(`Bonjour ${nom}, tu as ${age} ans. Tu es étudiant : ${estEtudiant}`);
if (age < 18)
	alert("Tu es mineur");
else
	alert("Tu es majeur");