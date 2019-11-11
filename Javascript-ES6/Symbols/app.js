// no two symbols can be unique to each other
const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne === symbolTwo); // false

const sumoz = {};

sumoz['name'] = 'sumoz';

console.log(sumoz);

sumoz[symbolOne] = "Sanjana";
sumoz[symbolTwo] = "Vivek";


