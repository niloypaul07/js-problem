var numbers= [1,2,3,4,5];

for(var i=0; i<numbers.length;i++){
    var number= numbers[i];
    if(number>4){
        break;
    }

    console.log(number);
}

var numbers= [1,2,3,4,5];

for(var i=0; i<numbers.length;i++){
    var number= numbers[i];
    if(number>1){
        continue;
    }

    console.log(number);
}

var i = 0;
for (i=0; i<5; i++){};
console.log(i);