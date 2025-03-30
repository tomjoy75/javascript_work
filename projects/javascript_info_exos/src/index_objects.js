// let user = new Object();
// user.name = "John";
// user.surname = "Smith";
// user.name = " Pete";
// delete user.name;
// console.log(user);

// function isEmpty(obj){

// }
// function isEmpty(obj){
//     let i = 0;
//     for (keys in obj){
//         i++;
//     }
//     return (!i);
// }
// Si on entre dans la boucle for, c'est qu'il y a au moins 1 "property"
// let isEmpty = obj=> { for (keys in obj) return false; return true};
// let schedule = {};
// //alert(schedule);
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
// for (let item in salaries){
// 	sum += salaries[item];
// }
// alert(`Sum is ${sum}`);

// before the call
// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu"
// };
// multiplyNumeric(menu);
// console.log(menu);

// function multiplyNumeric(obj){
// 	for (item in obj){
// 		if (typeof(obj[item]) == "number")
// 			obj[item] *= 2;
// 	}
// }

// let calculator = {
// 	read(){
// 		a = +prompt("First number", 0);
// 		b = +prompt("Second number", 0);
// 	},
// 	sum(){
// 		return a + b;
// 	},
// 	mul(){
// 		return a * b;
// 	},
// }
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
// 	step: 0,
// 	up() {
// 	  this.step++;
// 	  return this;
// 	},
// 	down() {
// 	  this.step--;
// 	  return this;
// 	},
// 	showStep: function() { // shows the current step
// 	  alert( this.step );
// 	  return this;
// 	}
//   };
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // ladder.down();
// // ladder.showStep(); // 0
// ladder.up().up().down().showStep().down().down().showStep();
// console.log(ladder);

// let obj = {};
// function A() { return obj;}
// function B() { return obj;}

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// function Calculator(){
// 	this.read = function(){
// 		this.a = +prompt( "n1?", 0);
// 		this.b = +prompt( "n2?", 0);
// 	}
// 	this.sum = () => this.a + this.b;
// 	this.mul = () => this.a * this.b;
// }
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(startingValue){
// 	this.value = startingValue;
// 	// this.read = function(){
// 	// 	this.value += +prompt("new number");
// 	// }
// 	// Or
// 	this.read = () => this.value += +prompt("new num");
// }
// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values