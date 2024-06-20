/*
    Question 1: Sum of all natural numbers from 1 to n
*/
debugger
function sumOfNaturalNumber(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }

    // also find using formula
  return num*(num+1)/2;
}

console.log(sumOfNaturalNumber(15));
