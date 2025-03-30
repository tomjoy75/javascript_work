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