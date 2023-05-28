const Words= 'my name is niloy paul . an experienced web developer';

console.log(Words.split(''));

console.log(Words.slice(1,5));
console.log(Words.at(-5));
console.log(Words.indexOf('niloy'));

let newArray= [ 'my ', ' is niloy paul . an experienced web developer' ];

console.log(newArray.join('.'));