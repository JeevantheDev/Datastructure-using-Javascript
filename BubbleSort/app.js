var input = document.getElementById("input");
var output = document.getElementById("output");

// Function for bubble sort
const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // Swaping
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
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
var arr2 = bubbleSort(arr);
output.innerHTML = `<p>After sorting array is: ${arr2}</p>`;
