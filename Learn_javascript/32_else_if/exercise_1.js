

function getHeircutPrice(){
    var basePrice = 15000;

    if(person.gender === "male"){
        return basePrice * 0.8;
    } else if(person.gender === "female"){
        return basePrice;
    } else {
        return basePrice + basePrice * 0.2;
    }
}

var person = {
    name:'khanh',
    gender: 'homosexual'
}

var fee = getHeircutPrice(person);
console.log(fee);