console.log('Hello World from index.js!');

//In Js, variables are defined using the 'let' keyword.
let myName = 'Alessandro';
console.log(myName);

let myAge = 36;
console.log(myAge);

// In Js, constants are defined using the 'const' keyword.
const interestRate = 0.3;
console.log(interestRate);

//Primitive types: String, Number, Boolean, undefined, null

//Reference Types: Object, Array, Function


//Objects
let person = {
    name: 'Sofia',
    age: 30
};

person.name = 'Alexa';
person['age'] = 45;

console.log(person);
console.log(person.age);


//Arrays: both size and type are dynamic
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
selectedColors[2] = 'green';
console.log(selectedColors);
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log('The array length is: ', selectedColors.length)

//Functions
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Alessandro', 'A. Ribeiro');

function square(number) {
    return number * number;

}

let number = square(2);
console.log('number is equal to ', number);