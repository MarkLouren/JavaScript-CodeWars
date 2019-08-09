/* CAT: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example: persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4 // and 4 has only one digit */
function persistence(num) {
  var times = 0;
  num = num.toString();   // conver number to string
  while (num.length > 1) {
    times++;  //set up a counter
    num = num.split('').map(Number).reduce((a, b) => a * b).toString(); // .map -conver string to array .reduce (make calculation in array with elements) .to String -convert back to string in order to check the length
  }
 
  return times; //returnt the counter
}

//Other solutions:

const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}
