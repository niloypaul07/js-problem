const numbers = [1, 2, 3, 4, 5];
const output = [];

for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}

console.log(output);


const numbers2 = numbers.map(num => num * 2);
console.log(numbers2);

const numbers3 = [1, 2, 3, 4, 5].map(x => x * 6);
console.log(numbers3);