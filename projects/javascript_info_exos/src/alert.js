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

// let login = prompt("Enter your login", "Admin");
// if (login == "Admin"){
// 	let pass = prompt("Enter your password", "TheMaster");
// 	if (pass == "TheMaster")
// 		alert("Welcome!");
// 	else if (!pass)
// 		alert("Cancelled");
// 	else
// 		alert("Wrong password")
// }
// else if (!login)
// 	alert("Cancelled");
// else
// 	alert("I don't know you");

// for (let i = 2; i <= 10; i += 2){alert(i);}

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i = -1;
// while ( ++i < 3) {
//   alert( `number ${i}!` );
// }

// let answer = 0;
// do {
// 	answer = +prompt("Input a number", 0);
// } while (answer < 100 && answer);

// // Prime numbers
// let max = +prompt("enter a number", 1);
// if (max < 2)
// 	alert("input too low! (>1)");
// else {
// 	let result = "2";
// 	nextPrime: for (let i = 3; i < max; i++){
// 		for (let j = 2; j < i; j++){
// 			if ((i % j) === 0)
// 				continue nextPrime;
// 		}
// 		result += ',' + i;
// 	}
// 	alert (result);
// }

// // Autre solution
// function eratosthenes(n) {
//   // Étape 1 : créer un tableau de booléens, tous initialisés à true
//   const isPrime = new Array(n + 1).fill(true);
//   isPrime[0] = false;
//   isPrime[1] = false;

//   // Étape 2 : éliminer les multiples
//   for (let i = 2; i * i <= n; i++) {
//     if (isPrime[i]) {
//       // On élimine tous les multiples de i à partir de i*i
//       for (let j = i * i; j <= n; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }
//   // Étape 3 : collecter les nombres premiers
//   const primes = [];
//   for (let i = 2; i <= n; i++) {
// 	  if (isPrime[i]) {
// 		  primes.push(i);
// 		}
// 	}
// 	return primes;
// }
// // Exemple d'utilisation :
// const n = +prompt("enter a number", 1);
// //const n = 100;
// console.log(`Nombres premiers jusqu'à ${n} :`);
// console.log(eratosthenes(n));

// Rewrite
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// if (browser === 'Edge')
//     alert( "You've got the Edge!" );
// else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')
//     alert( 'Okay we support these browsers too' );
// else
//     alert( 'We hope that this page looks ok!' );

// // Convert in Switch
// let a = +prompt('a?', '');

// // if (a == 0) {
// //   alert( 0 );
// // }
// // if (a == 1) {
// //   alert( 1 );
// // }

// // if (a == 2 || a == 3) {
// //   alert( '2,3' );
// // }

// switch (a){
// 	case 0:
// 		alert (0);
// 		break;
// 	case 1:
// 		alert (1);
// 		break;
// 	case 2:
// 	case 3:
// 		alert( '2,3');
// 		break;
// }

// Functions

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// function checkAge(age) {
// 	return ((age > 18) ? true : confirm('Did parents allow you?'));
// }
// function checkAge(age) {
// 	return (age > 18 || confirm('Did parents allow you?'));
// }

// function min(a, b){
// 	return ((a < b) ? a : b);
// }

// function pow(x, n){
// 	return (x**n);
// }
// let num = +prompt("number?", 0);
// let exp = +prompt("exposant", 1);
// alert((exp > 0) ? pow(num, exp): `Power ${exp} is not supported`);

//Rewrite with arrow functions
// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
//   }
let ask = (question, yes, no) => confirm(question) ? yes() : no();
  
  ask(
	"Do you agree?",
	function() { alert("You agreed."); },
	function() { alert("You canceled the execution."); }
  );
  ask(
	"Do you agree?",
	() =>  alert("You agreed."), 
	() =>  alert("You canceled the execution.") 
	
  );