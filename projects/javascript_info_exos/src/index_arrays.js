// let styles = ["Jazz", "Blues"];
// alert (styles);
// styles.push("Rock-n-Roll");
// alert (styles);
// styles[(styles.length - 1)/ 2 ] = "Classics";
// alert (styles);
// styles.shift();
// alert (styles);
// styles.unshift("Rap", "Reaggae");
// alert (styles);

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?

// function sumInput(){
// 	const numbers = [];
// 	while (true) {
// 		let answer = prompt("A number please?");
// 		if (answer === "" || answer === null || !isFinite(answer))
// 			break;
// 		numbers.push(+answer);
// 	}
// 	let sum = 0;
// 	for (let number of numbers )
// 		sum += number;
// 	return sum;
// }
// alert(sumInput());

//Maximal subarray
//Slow solution
// function getMaxSubSum(arr){
// 	let max = 0;
// 	for (let i = 0; i < arr.length; i++){
// 		let sum = 0;
// 		for (let j = i; j < arr.length; j++){
// 			sum += arr[j];
// 			if (sum > max)
// 				max = sum;
// 		}
// 	}
// 	return (max);
// }
// Fast Solution
// function getMaxSubSum(arr){
// 	let max = 0;
// 	let maxSliced = 0;
// 	for (let num of arr){
// 		maxSliced += num;
// 		if (max < maxSliced)
// 			max = maxSliced;
// 		else if (maxSliced < 0)
// 			maxSliced = 0;
// 	}
// 	return (max);
// }
// alert(getMaxSubSum([-1, 2, 3, -9]));
// alert(getMaxSubSum([2, -1, 2, 3, -9]));
// alert(getMaxSubSum([-1, 2, 3, -9, 11]));
// alert(getMaxSubSum([-2, -1, 1, 2]));
// alert(getMaxSubSum([100, -9, 2, -3, 5]));
// alert(getMaxSubSum([1, 2, 3]));

// function camelize(str){
// 	let strArray = str.split('-');
// //	console.log(strArray);
// 	if (strArray[0] == "")
// 		strArray.shift();
// 	strArray = strArray.map(word => word[0].toUpperCase() + word.substring(1));
// 	return (strArray.join(''));
// }
// Better Solution
// function camelize(str){
// 	return str.split('-')
// 	.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice())
// 	.join('');
// }
// alert camelize("background-color"));
// alert(camelize("list-style-image"));
// alert(camelize("-webkit-transition"));

// function filterRange(arr, a, b){
// 	return arr.filter(item => (item >= a && item <= b));
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)

// function filterRangeInPlace(arr, a, b){
// //	arr = arr.filter(item => a <= item && b>=item)
// 	arr.forEach((item, index, Array) => {(item < a || item > b)?Array.splice(index, 1):null});
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8, 15];
// //arr.sort(function(a, b){return b - a});
// arr.sort((a , b)=> b - a);
// alert( arr ); // 15, 8, 5, 2, 1, -10

// Copy and sort array
// function copySorted(arr){
// 	return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// Extendable calculator
function Calculator(){
	this.calculate = function(str){
		let operators = str.split(" ");
		if (operators[1] === "+")
			return +operators[0] + +operators[2];
		else if (operators[1] === "-")
			return +operators[0] - +operators[2];
		else
			alert("Wrong operator");
	};
	this.addMethod(name, func){

	};
}
let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10