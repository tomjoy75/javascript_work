'use strict';
// function showName (name){
// 	alert(`Bonjour ${name} !`);
// }
let showName = (name) => alert(`Bonjour ${name} !`);
//let checkAge = (age) => {if (age >= 18) return "majeur"; else return "mineur";};
let checkAge = (age) => (age >= 18 ? "Majeur" : "mineur");
let group = [];
for (let i = 0; i < 2; i++){
	let name = prompt("Ton nom?", "");
	let age = +prompt("Ton age?", 18);
//	group[i] = {name, age};
	group.push({ name, age});
	showName(name);
	alert(`Tu es ${checkAge(age)}.`);
}
console.log(group);