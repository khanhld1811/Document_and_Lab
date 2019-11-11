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
    doA(function(){
        doB(function(){
            doC(function(){
                console.log('A');
            })
        })
    })
}

main();