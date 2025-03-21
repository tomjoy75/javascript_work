// Dyma 16.Les types en JS
console.log("%cDyma 16.Les types en JS", "font-weight: bold; font-size: 14px; color: blue;")
// string
const name = "jean";
console.log(name + " is type of " + typeof name);
// nombre
const age = 18.5;
console.log(age + " is type of " + typeof age);
// null
const hobbies = null;
console.log(hobbies + " is type of " + typeof hobbies);
// undefined
let action;
console.log(action + " is type of " + typeof action);
// symbole
let sym = Symbol();
console.log(typeof sym);
// boolean
let actif = true;
console.log(actif + " is type of " + typeof actif);

// objet littéral
const ville = {
    name: "Paris",
    state: "France"
};
console.log(typeof ville);
// functions
const greetings = function() {
    console.log("hello");
};
console.log(typeof greetings);
// date
const today = new Date();
console.log(typeof today);
// array
const arr = [1, 2, 3];
console.log(typeof arr);

// Dyma 17.operator_precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// Dyma 18.conversion
// Conversion implicite (coercion)
console.log("%cDyma 18. Conversion", "font-weight: bold; font-size: 14px; color: blue;");
const a = 1 + "Hello";
console.log(a);
const b = 1;
const c = "1";
console.log(b + c);
// Conversion explicite
String(1);  // "1"
Number("22"); // 22
Boolean("true"); // true

// Dyma 19.Comparaison
console.log("%cDyma 18. Comparaison", "font-weight: bold; font-size: 14px; color: blue;");
// Attention
console.log (3 < 2 < 1)