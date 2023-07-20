function add(first, second) {
    const total = first + second;
    return total;

}

const newTotal = add(10, 20);
console.log(newTotal);


function add(first, second = 10) {
    const total = first + second;
    return total;

}
const newTotalNow = add(10, 4);
console.log(newTotalNow);

function Name(firstName, secondName = 'paul') {
    const newName = firstName + ' ' + secondName;
    return newName;
}
const newNames = Name('niloy');
console.log(newNames);
