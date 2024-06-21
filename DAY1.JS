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

// Question 6: Missing Number
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
// let arr = [1, 0, 3];
// console.log(missingNumber(arr));

function removeDuplicate(nums) {
  // num length is 0 then
  if (nums.length === 0) return 0;

  let k = 1;

  //if not then
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

// const num = [1, 1, 2]
// const k1 =  removeDuplicate(num)
// console.log(k1)
// console.log(num.slice(0, k1))

// what is Array

// array contain multile value in single variable and it occupied the contiguous memory space

const arr3 = [];
const arr2 = new Array();

// console.log(arr3, arr2)

// Question 1: How do you check if an element exist in an array?

const findElement = (num, target) => {
  for (let x of num) {
    if (x === target) {
      return true;
    }
  }
  return false;
};

// const number = [1,3,42,4];
// console.log(findElement(number, 0))
// console.log(number.includes(42))

// return index

const findElementIndex = (num, target) => {
  for (let i = 0; i <= num.length; i++) {
    if (num[i] === target) {
      return i;
    }
  }
  return -1;
};
// const number = [1,3,42,4];
// console.log(findElementIndex(number, 4))
// console.log(number.indexOf(4))

// splice vs slice

//splice(start, deleted item numver, update)
// 1. splice used for modifying the array element
// 2. it change the original array size
// 3. it contain three paramenter for modifying the element of array
// number.splice(0, 0, [11,22,3])
// number.splice(0, 0)
// console.log(number)

//slice
// slice return new array but not modify the existing array

const number = [1, 3, 42, 4];
// shallow copy
// new array also refrencing same memory location and whenever it will change the both array will be effected
// const arr = number
// arr.splice(1, 3)
// console.log(arr)

// deep copy array
// const arrc =  [...number]

// how to check two array are equal or not

const isArrayEqual = (arr1, arr2) => {
  if (arr1.length === arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};


// flat 
const y = [1,234,4,5,6,[2,1,34,5]]
y.flat(1)
console.log(y)

