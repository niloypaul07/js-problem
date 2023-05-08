let mark = 97; 
    
    if (mark <= 100 && mark >= 90){
          console.log("Gread A+");
    }
    
    else if(mark <= 89 && mark >= 80){
          console.log("Gread A");
    }
    
    else if(mark <= 79 && mark >= 70){
          console.log("Gread B");
    }
    
    else if(mark <= 69 && mark >= 60){
          console.log("Gread C");
    }
    
    else if(mark < 60 ){
          console.log("Gread F");
    }



    var num1= 13;
    var num2= 79;
    var num3= 45;
    var largest;
    if(num1 >= num2 && num1 >= num3) {
        largest = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    }
    else {
        largest = num3;
    }
    
    // display the result
    console.log("The largest number is " + largest);




    var side1= 9;
    var side2= 8;
    var side3= 9;
    var largest;
    if(side1 == side2 || side1 == side2) {
        console.log('the triangle is isosceles');
    }
    else if (side2 == side1 || side2 == side3) {
        console.log('the triangle is isosceles');
    }
    else if (side3 == side1 || side3 == side2) {
        console.log('the triangle is isosceles');
    }
    else {
        console.log('the triangle is not isosceles');
    }
    
    // display the result
    //console.log("The largest number is " + largest);


    