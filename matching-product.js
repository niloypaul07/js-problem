const products=[

    {name:'samsung phone',ram: '4gb',camera: '4PX', inch: 5},
    {name:'grameen Phone',ram: '4gb',camera: '4PX', inch: 5},
    {name:'Iphone',ram: '4gb',camera: '4PX', inch: 5},
    {name:'xaomi phone',ram: '4gb',camera: '4PX', inch: 5},
    {name:'vivp phone',ram: '4gb',camera: '4PX', inch: 5},
];


function MatchProducts(products,search){

 const Matched=[];
 for ( const product of products){
     
    if(product.name.toLowerCase(). includes(search.toLowerCase())){

        Matched.push(product);

    }


}
return Matched;

}

console.log(MatchProducts(products,'phone'));