//Teamplate string

function greeting(name) {
    return 'Hi, ' + name + '!';
}

function greeting2(name) {
    return `Hi 
    
    ${name} ${1+3}`;
}

var result = greeting2('Khanh');
console.log(result);