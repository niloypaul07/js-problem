function ticketPrice(TicketQuantity){

    const first100TicketPrice= 100;
    const second100TicketPrice= 90;
    const restTicketPrice= 70;


    if(TicketQuantity<=100){
        const price = TicketQuantity * first100TicketPrice;
        return price;
    }
    else if(TicketQuantity<=200){

        const first100Rate = 100* first100TicketPrice;
        const restTicketQuantity = TicketQuantity-100;
        const restTicketPrices= restTicketQuantity * second100TicketPrice;
        const toTalPrice= first100Rate + restTicketPrices;

        return toTalPrice;

    }
    else{
        const first100Rate = 100* first100TicketPrice;
        const secont100Rate= 100* second100TicketPrice;
        const restTicketQuantity = TicketQuantity-200;
        const restTicketPrices= restTicketQuantity * restTicketPrice;
        const toTalPrice= first100Rate + restTicketPrices+ secont100Rate;
       return toTalPrice;
    }



}


const Total= ticketPrice(201);
console.log(Total);