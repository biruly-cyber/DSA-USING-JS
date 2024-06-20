/*
    Question 1: Sum of all natural numbers from 1 to n
*/
// debugger
function sumOfNaturalNumber(num) {
  //   let sum = 0;
  //   for (let i = 1; i <= num; i++) {
  //     sum = sum + i;
  //   }

  // also find using formula
  return (num * (num + 1)) / 2;
}

// console.log(sumOfNaturalNumber(15));

// Question 2: Sum of digits of a number
// 132 = 1 + 3 + 2 = 6
// 132 % 10 = remainder = 2
// 13%10 = remainder = 2+3
// 1%10 = remainder = 2+3+1 = 6

// solution
function sumOfDigitsOfNumber(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// console.log(sumOfDigitsOfNumber(123));

// do while loop

// Question 3: count the number of digits of a number
// 12345 = 5

function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

//
// Question 4: Palidrome number
function isPalindrome(x) {
  //1234
  //4321
  // reverse the number

  let num = x;
  reverseNum = 0;

  while (num > 0) {
    const lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return x === reverseNum;
}

// console.log(isPalindrome(121))

// FIBONACCI Number
// 0 1 1 2 3 5 8

function fibonacciSeries(n) {
  if (n < 2) {
    return n;
  }

  let prev = 0,
    curr = 1,
    next;
  for (let i; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

// console.log(fibonacciSeries(123))

// Missing Number
// algo
// 1 + 0 + 3 = 4
// 1 + 2 + 3 = 6
// 6 - 4 = 2

function missingNumber(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return (num.length * (num.length + 1)) / 2 - sum;
}
let arr = [1, 0, 3];
console.log(missingNumber(arr));
