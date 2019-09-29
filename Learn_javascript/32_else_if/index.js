// Example: calculate bus ticket fee
// - if age < 15,  discount 20%
// - if age > 60 discount 10%
// - otherwise 10000/ticket

function getTicketFee(person){
    var basePrice = 10000;
    if(person.age < 15){
        return 10000 * 0.8;
    } else if(person.age > 60){
        return 10000 * 0.9;
    } else{
        return 10000;
    }
}

var person = {
    age: 16
};
var fee = getTicketFee(person);
console.log(fee);

