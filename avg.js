 function make_avg(num1,num2,num3){

     var sum = num1+num2+num3;
     var avg =sum/3;
     return avg;


 }

 var totalAvd= make_avg(60,70,80);
 console.log(totalAvd);


 function foo(){
    console.log('foo');
    bar();
 }
 
 function bar(){
    console.log('bar');
 }
 foo();
 bar();


 function even_odd(num){
    
    if(num%2==0){
        console.log('even');

    }
    else{
        console.log('odd');

    }
    
 }

 even_odd(114);