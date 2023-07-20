const fish = {

    name: 'Hislha',
    address: 'Chandpur',
    color: 'silver',
    weight: '500 gm',
    price: 4000
}


const { name, price } = fish;
console.log(name);
console.log(price);


//array destructuring


const [first, second] = [20, 30];
console.log(first, second);

const friend = ['Shakib', 'Rafi', 'Sabuj'];
const [king, lost, old] = friend;
console.log(king);

function getNames() {
    return ['Stephen', 'Jhony'];
}

const [father, brother] = getNames();
console.log(father, brother);