let num1= 8;
let num2= 2;


const temp=num1;
num1=num2;
num2=temp;

console.log(num1,num2);

//destructuring

[num1 , num2]= [num2,num1]
console.log(num1,num2);