function sumOfArray(year)

{
    let sum=0;
for(let i=0; i< year.length;i++){

    const index=i;
    const element= number[index];
    sum= sum + element;
    console.log(index,element,sum);

}
return sum;

}
const sumOf = [5,7,8,10,45,30];
sumOfArray(sumOf);