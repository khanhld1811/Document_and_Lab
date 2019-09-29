//bronze, silver, gold, diamond
// bronze: 2%
// silver: 5%
// gold: 8%
// diamond: 10%
var memberCard = {
    tier: 'diamond'
};

function getTotal(price, card){
    var discountRate;

    switch(card.tier){
        case 'bronze':
            discountRate = 0.02;
            break;
        case 'silver':
            discountRate = 0.05;
            break;
        case 'gold':
            discountRate = 0.08;
            break;
        default:
            discountRate = 0.1;
            break;
    } 

    return price * (1-discountRate);
}

var total = getTotal(500000, memberCard);
console.log(total);

// red, green, orange
var trafficLight = 'orange';

function goOrNotInVietNam(lightValue){
    switch(lightValue){
        case 'green':
        case ' orange':
            console.log('go');
        default: 
            console.log('stop');
            break;
    }
}

goOrNotInVietNam(trafficLight);

//1. List student
//2. Create a new student
//3. Save & exit
// realine-sync

