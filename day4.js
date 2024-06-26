//how to sort in array

//sort an array

// const arr = [-1, 2, 5, 3, 6];

// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));

// const strArr = ["mongo", "apple", "banana"];
// console.log(strArr.sort());

const str = "biruly";

// only do with uppercase or lower case letter
// console.log(str.split("").sort().join(""));

//bubble sort
const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // let temp = arr[i];
        // arr[i] = arr[i + 1];
        // arr[i + 1] = temp;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

// console.log(bubbleSort([-1, 2, 5, 3, 6]));

// selection sort
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort([-1, 2, 5, 3, 6]));
