

const calculateAge = (birthYear) => 2024 - birthYear;

const age = calculateAge(2005);
console.log(age);


let prices = [5, 10, 20, 3, 50];
prices = prices.filter(price => price >= 10);
const fvckPrices = prices.map(price => price +2);
console.log(fvckPrices);