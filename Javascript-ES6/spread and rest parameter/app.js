// rest parameter

/**When ever we pass indefinite numbers of arguments to the funtion
 * we can bundle those arguments into a bundle into an array
*/

const double = (...nums) =>{
    console.log(nums);

    return nums.map(num => num*2);
}

const result = double(1,2,3,4,5,6,7);

console.log(result);

// spread syntax

/** Spread is used to cloning the array or object */

const arr = [1,2,3,4,5,6];
console.log(...arr);

// make a copy of arr

const arrClone = [...arr];

console.log(arrClone.pop());
console.log('arrays clone',arrClone);
console.log('original array',arr);

// spread with objects

const obj = {name:'Sumit',lastname:'Ghewade'};
console.log(obj);
const objClone ={...obj,location:'Pune'}
console.log(objClone);