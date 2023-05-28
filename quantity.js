const phones =[

    {name:'samsung',camera: 12, storage: '32gb',price: 36000,quantity: 5},
    {name:'iphone',camera: 12, storage: '32gb',price: 82000,quantity: 2},
    {name:'xaomi',camera: 12, storage: '32gb',price: 32000,quantity: 4},
    {name:'vivo',camera: 12, storage: '32gb',price: 50000,quantity: 7},
 
    ];
    
    function cheapestPhone(phones){
    

        let sum= 0;
        for (let i = 0 ; i<phones.length; i++){
    
            let phone= phones[i];
            let sumPrice= phone.price * phone.quantity;
            sum= sum + sumPrice;
        }
    
    return sum;
    
    
    }
    
    const MySelection= cheapestPhone(phones);
    console.log(MySelection);