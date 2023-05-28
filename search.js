const Search = 'niloy S';
const doesExist= Search.includes('p');
console.log(doesExist);

console.log(Search.indexOf('n'));

//if out is -1 then the string is not include in index because index starts with 0 
if( Search.includes('niloy') != -1){
    console.log("valid");
}
else{
    console.log('invalid');
}

