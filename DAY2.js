//recursion

// the function called itself is known as recursion

function fun(n) {
  if (n == 0) {
    return;
  }

  console.log("fun", n);
  fun(n - 1);
}
// fun(10);

// factorial of number

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

// console.log(factorial(3))

//Question 2 : Find the sum of given array using recursion

function sumOfArray(arr) {
  if (arr.length === 0) return 0;

  const lastElem = arr.pop();
  return lastElem + sumOfArray(arr);
}

// console.log(sumOfArray([1,2,3,4,5]))

// find fobonacci series using recursion
function fibo(n) {
  if (n < 2) return n;

  return fibo(n - 1) + fibo(n - 2);
}
// console.log(fibo(5))

// linear search algorithm
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
};
// time complexcity = O(N)

// console.log(linearSearch([1,2,3,4,3], 3))

/*
Given two strings needle and haystack, 
return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.

*/

const isExistOrNot = (haystack, needle) => {
  //if string is empty
  if (needle === " ") return 0;

  let hLen = haystack.length;
  let nLen = needle.length;

  for (let i = 0; i <= hLen - nLen; i++) {
    let j = 0;
    while (j < nLen && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === hLen) {
      return i;
    }
  }

  return -1;
};

// console.log(isExistOrNot("hello", " "))

function textIsExist(n, m){
    return n.indexOf(m)
}

// console.log(textIsExist("hello", "helo"))

// binary search 
const binarySearch = (arr, target)=>{
    let start = 0; end = arr.length - 1;
    while(start <=  end){
        let mid = Math.floor((end + start)/2)

        if(arr[mid] === target){
            return mid
        }
        else if(arr[mid] > target){
            end = mid - 1
        }else{
            start = mid + 1
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6], 7))

