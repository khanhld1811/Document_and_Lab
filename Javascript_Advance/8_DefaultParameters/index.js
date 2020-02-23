//Default parameters
function greenting(name = 'friend', language = 'en') {
    if (language === 'en') {
        return `Hi, ${name}`;
    }

    if(language === 'ja') {
        return `Konichiwa, ${name}`;
    }

    return 'Chao ban';

}

console.log(greenting('Khanh','en'))