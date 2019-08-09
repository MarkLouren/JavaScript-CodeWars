/*
Cat: https://www.codewars.com/kata/523f5d21c841566fde000009
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
ex: array_diff([1,2],[1]) == [2] 
*/
// My Solution
function array_diff(a, b) {
 let difference = a.filter(x => b.indexOf(x) == -1);
 return difference;
}
