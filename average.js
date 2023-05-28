function Avg(numbers){
let sum=0;
for (let i=0; i<numbers.length;i++){

    const element=numbers[i];
    console.log(element);
    sum=sum+ element;

}
return sum/numbers.length;




}


let ArrayNumber= [5,8,6,7,8];
let Result= Avg(ArrayNumber);
console.log(Result);