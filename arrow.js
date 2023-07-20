//regular function

function add(first, second) {
    const total = first + second;
    return total;
}

// funtional expression

const add1 = function add(first, second) {

    return first + second;
}

//arrow function 

const add2 = (first, second) => first + second;



const addAll = (a, b, c, d, e) => a + b + c + d + e;
const result = addAll(1, 2, 3, 4, 5);
console.log(result);

//no parameter

const getPie = () => 3.1416;

//one parameter

const multy = (sum) => sum * 2;


//multi line arrow function

const doMath = (x, y, z) => {

    const sum1 = x + y;
    const sum2 = y + z;
    const Total = sum1 + sum2;

    return Total;

}