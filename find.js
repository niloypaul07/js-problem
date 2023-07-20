
const number2 = [12, 3, 46, 3453, 56, 67, 6, 4];

const fiveNumbers = number2.filter(n => n % 3 == 0);
const fiveNumbers2 = number2.find(n => n % 3 == 0);

console.log(fiveNumbers);
console.log(fiveNumbers2);

