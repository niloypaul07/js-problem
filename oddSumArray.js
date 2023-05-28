function sumOfArray(number)

{
    let sum=0;
for(let i=0; i< number.length;i++){

    const index=i;
    const element= number[index];
    sum= sum + element;
    //console.log(index,element,sum);

}
return sum;

}
const sumOf = [5,7,8,10,45,30];
sumOfArray(sumOf);



function oddNumber(number)

{
 const array=[];  
for(let i=0; i< number.length;i++)
{

    const index=i;
    const element= number[index];
    if(element %2 !==0)
    {
        console.log(index,element);
        array.push(element);

    }
   

}
return array;

}
const oddOf = [5,7,8,10,45,30];
const newOdd=oddNumber(oddOf);
console.log(newOdd);
const sumOdd=sumOfArray(newOdd);
console.log(sumOdd);