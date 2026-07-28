const num1 = 6
const num2 = 9

console.log(num1 + num2);

const userName = 'Rish'
let age = '20'
const birthYear = '1970'

console.log(userName);
console.log(age);
console.log(birthYear);

const prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter a number: "), 10);
let x = number % 2;
if(x === 0){
    let ans = true; 
    console.log(ans);
}else{
    console.log(x);
}