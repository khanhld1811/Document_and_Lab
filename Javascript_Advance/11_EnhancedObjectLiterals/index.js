const name = 'khanh';
const cat = {
    name,
    run(){
        console.log(`Hi ${this.name}`);
    }
}

cat.run();