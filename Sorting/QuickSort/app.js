var input = document.getElementById("input");
var output = document.getElementById("output");

// Function for swapping
var swap = (arr, i, j) => {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// Function for getting pivot
var getPivot = (arr, start = 0, end = arr.length + 1) => {
  var pivot = arr[start];
  var swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};
// Function for quick sort
var quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = getPivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};
// Input
var inputSize = prompt("Give your array size.");
var arr = [];
for (let i = 0; i < parseInt(inputSize); i++) {
  var num = prompt("Give your array input values.");
  arr[i] = parseInt(num);
}
input.innerHTML = `<p>Before sorting array is: ${arr}</p>`;
var arr2 = quickSort(arr);
output.innerHTML = `<p>After sorting array is: ${arr2}</p>`;
