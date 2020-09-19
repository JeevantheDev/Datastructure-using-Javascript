var input = document.getElementById("input");
var output = document.getElementById("output");

// Function get digit
var getDigit = (num, i) => {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
};

// Function digit count
var digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// Function most digits
var mostDigit = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

// Function for radix sort
var radixSort = (arr) => {
  let maxDigitCount = mostDigit(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBucket[digit].push(arr[i]);
    }
    arr = [].concat(...digitBucket);
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
var arr2 = radixSort(arr);
output.innerHTML = `<p>After sorting array is: ${arr2}</p>`;
