function binarySearch(arr, value) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === value) {
    return middle;
  } else {
    return -1;
  }
}

const arrayValue = [1, 5, 8, 9, 15, 25, 31, 45, 50];

console.log(binarySearch(arrayValue, 31));
