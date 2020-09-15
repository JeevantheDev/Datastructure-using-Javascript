var input = document.getElementById("input");
var output = document.getElementById("output");

// Function for selection sort
const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};
// Input
var inputSize = prompt("Give your array size.");
var arr = [];
for (var i = 0; i < parseInt(inputSize); i++) {
  var num = prompt("Give your array input values.");
  arr[i] = parseInt(num);
}
input.innerHTML = `<p>Before sorting array is: ${arr}</p>`;
var arr2 = insertionSort(arr);
output.innerHTML = `<p>After sorting array is: ${arr2}</p>`;
