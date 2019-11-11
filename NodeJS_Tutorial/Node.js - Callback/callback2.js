function con_tho_an_co(callback007){
    setTimeout(function(){
        console.log('Con thỏ ăn cỏ, uống nước');
        callback007();
    },3000);
}

function hang(){
    console.log("Chui vào hotel");
}

var callback = function(){
    hang();
}

con_tho_an_co(callback);
hang();