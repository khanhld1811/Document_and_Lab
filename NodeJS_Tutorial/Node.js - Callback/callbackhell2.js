function doA(cb){
    cb();
}

function doB(cb){
    cb();
}

function doC(cb){
    cb();
}

function main(){
    doA(thenB);
}

function thenB(){
    doB(thenC)
}

function thenC(){
    doC(function(){
        console.log("ok");
    })
}

main();