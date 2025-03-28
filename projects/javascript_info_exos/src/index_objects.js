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
let isEmpty = obj=> { for (keys in obj) return false; return true};
let schedule = {};
//alert(schedule);
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false