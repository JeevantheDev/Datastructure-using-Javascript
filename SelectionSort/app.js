var input = document.getElementById("input");
var output = document.getElementById("output");

// Function for selection sort
const selectionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
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
var arr2 = selectionSort(arr);
output.innerHTML = `<p>After sorting array is: ${arr2}</p>`;
