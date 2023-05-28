function ReverseString(letter){
 let reverse = '';
for( let i = letter.length-1; i>=1; i--){
    let index=i;

 let element =letter[i];
 reverse = reverse + element;
 console.log(element,reverse);

}

return reverse;
}

let MainLetter = 'i am a good boy';
let ReverseLetter = ReverseString(MainLetter);
console.log(ReverseLetter);





function ReverseWord(str){

let Word= str.split(' ');
let Reversing= [];
for( let i = Word.length-1; i>=0;i--){

    const Wording = Word[i];
    Reversing.push(Wording);

}
//console.log(Word);
const Reversings= Reversing.join(' ');
return Reversings;
}

const MainWord= 'i am a good boy';
const Reverses= ReverseWord(MainWord);
console.log(Reverses);




