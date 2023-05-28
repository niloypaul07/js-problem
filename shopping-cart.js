const phones =[

    {name:'samsung',camera: 12, storage: '32gb',price: 36000},
    {name:'iphone',camera: 12, storage: '32gb',price: 82000},
    {name:'xaomi',camera: 12, storage: '32gb',price: 32000},
    {name:'vivo',camera: 12, storage: '32gb',price: 50000},
    
    ];
    
    function cheapestPhone(phones){
    

        let sum= 0;
        for (let i = 0 ; i<phones.length; i++){
    
            let phone= phones[i];
            sum= sum + phone.price;
        }
    
    return sum;
    
    
    }
    
    const MySelection= cheapestPhone(phones);
    console.log(MySelection);