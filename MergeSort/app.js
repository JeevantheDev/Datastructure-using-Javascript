var input = document.getElementById("input");
var output = document.getElementById("output");

// Function for merge two arrays
const mergeArray = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};
// Function for merge sort
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArray(left, right);
};
// Input
var inputSize = prompt("Give your array size.");
var arr = [];
for (var i = 0; i < parseInt(inputSize); i++) {
  var num = prompt("Give your array input values.");
  arr[i] = parseInt(num);
}
input.innerHTML = `<p>Before sorting array is: ${arr}</p>`;
var arr2 = mergeSort(arr);
output.innerHTML = `<p>After sorting array is: ${arr2}</p>`;
