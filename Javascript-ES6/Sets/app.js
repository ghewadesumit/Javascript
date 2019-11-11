// Sets

// set only holds unique values
// it doesn't allow duplicate values
const arr = ['sumoz','sanj','vivek','vivek'];

const setHolder = new Set(arr);
console.log(...setHolder);

// to display set as an array

const arrHolder = [...setHolder];
console.log(arrHolder)

// short hand for displaying a set as array
const arrTwo = [1,2,3,44,5,6,4,4,3,2];
const arrHolderTwo = [ ...new Set(arrTwo)];
console.log(arrHolderTwo);


// add elements to the set

setHolder.add('Roger');
console.log('Adding element Roger',setHolder);

// delete an element from the set

setHolder.delete('Roger');
console.log('Delete',setHolder);

// to clear the set use 
console.log(setHolder);
setHolder.clear();
console.log(setHolder);

const sumoz = new Set([
    {name:'Sumoz',age:'25'},
    {name:'Sanjana',age:'26'},
    {name:'vivek',age:'29'}
])

sumoz.forEach(ele => console.log(ele.name,ele.age))

