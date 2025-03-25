//alert("I'm Javascript from external script!");
// let name = "John";
// let admin = name ;
// alert(name);

// let planetName, currentUserName;
// const userName = prompt("What is your name?", "noname");
// alert (`Your name is ${userName}`);

// let nom, age, estEtudiant = true;
// nom = prompt("Quel est ton nom?");
// age = +prompt("Quel est ton age?");
// alert(`Bonjour ${nom}, tu as ${age} ans. Tu es étudiant : ${estEtudiant}`);
// if (age < 18)
// 	alert("Tu es mineur");
// else
// 	alert("Tu es majeur");

// let name = prompt("What's the \"official\" name of Javascript?");
// if (name === "ECMAScript")
// 	alert("Right!");
// else
// 	alert("You don't know? \"ECMAScript\"!");

// const num = prompt("Enter a number");
// if (num > 0){
// 	alert(1);
// }
// else if (num < 0){
// 	alert(-1);
// }
// else{
// 	alert(0);
// }

// let result = (a + b < 4) ? 'Below' : 'Over';
// let message = (login == 'Employee') ? 'Hello' : 
// 				(login == 'Director') ? 'Greetings':
// 				(login == '') ? 'No login' : '';

// if (age >= 14 && age <= 90){};
// if (!(age >= 14 && age <= 90)){};
// if (age < 14 || age > 90)

let login = prompt("Enter your login", "Admin");
if (login == "Admin"){
	let pass = prompt("Enter your password", "TheMaster");
	if (pass == "TheMaster")
		alert("Welcome!");
	else if (!pass)
		alert("Cancelled");
	else
		alert("Wrong password")
}
else if (!login)
	alert("Cancelled");
else
	alert("I don't know you");