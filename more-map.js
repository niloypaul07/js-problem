const friends = ['niloy', 'sabuj', 'sagor', 'elahi', 'nil']

const firstLetter = friends.map(f => f[0]);
const friendLenght = friends.map(f => f.length);
console.log(firstLetter);
console.log(friendLenght);

const products = [
    {
        id: 1, name: 'laptop', price: 56783,
        id: 1, name: 'mobile', price: 26783,
        id: 1, name: 'tablet', price: 56783,
    }]

const items = products.map(product => product.name);
console.log(items);

const friendss = ['niloy', 'sabuj', 'sagor', 'elahi', 'nil']
friendss.forEach(f => console.log(f));



const number2 = [1.23, 46, 3453, 56, 67, 6, 4];
const bigNum = number2.filter(n => n > 20);
const smallNum = number2.filter(n => n < 20);
console.log(bigNum);
console.log(smallNum);


const products1 = [
    {
        id: 1, name: 'laptop', price: 56783,
        id: 1, name: 'mobile', price: 26783,
        id: 1, name: 'tablet', price: 56783,
    }]

const priceRange = products1.filter(p => p.price > 234);
console.log(priceRange);