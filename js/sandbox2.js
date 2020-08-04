//Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
//rounds to nearest integer 
console.log(Math.round(area));
//rounds down to nearest integer no matter the decimals
console.log(Math.floor(area));
//rounds up to nearst integer no matter the decimals
console.log(Math.ceil(area));
//cuts off decimals
console.log(Math.trunc(area));

// random number generation
//decimal number between 0 and 1
const random = Math.random();
console.log(random);
//generate random number between 1 and 100
console.log(Math.round(random * 100));
