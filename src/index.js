import {styleBodyFunction, addElement} from './dom';
import users, {getPremiumUser}from './data';

console.log('Index file started');
styleBodyFunction();
addElement('Hello supersumoz today you have to finish the assignment');

console.log(getPremiumUser(users));
const greet = (name) => {

    console.log(`Greetings ${name}`);
}

greet('Super Sumoz');
greet('Sanjana');
greet('Vivek');
greet('Roger');
greet('Mayra');

class User{
    constructor(score){
        this.score=score;
    }
}