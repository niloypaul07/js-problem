function test_LeapYear(year) {

        const leapYear=[];
        for( let i=0;  i < year.length;i++){

                const index = i;
                const element = year[index];


                if ((element % 4 == 0) && ( element % 100 != 0) || ( element % 400 == 0)) {
                        console.log(element);
                        leapYear.push(element);
                } 
                        
        

        }
    return leapYear;
 }



const ly= [2023 ,2022 ,2024,2028 ,2029, 2030];
const years= test_LeapYear(ly);
console.log(years);
