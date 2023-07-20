const numbers = [10, 23, 45, 57, 35]
const largest = Math.max(...numbers);
//console.log(...numbers);
//.log(largest);

const numbers2 = [...numbers];

numbers.push(500);
numbers2.push(501);
console.log(numbers);
console.log(numbers2);

const numbers4 = [1, 2, ...numbers, 3, 4];
console.log(numbers4);


