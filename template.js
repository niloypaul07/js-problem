const person1 = 'niloy paul';
const person2 = "paul niloy";
const person3 = `nil paul`;

const Multiline = 'niloy \n' +
    'paul \n' +
    'nil \n'
console.log(Multiline);

//template string


const NewMultiline = `niloy
paul
nil`
console.log(NewMultiline);

const a = 10;
const b = 20;

const Summary = `Sum of: ${a} and ${b} is = ${a + b}`;
console.log(Summary);
