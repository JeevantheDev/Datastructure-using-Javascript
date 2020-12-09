function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

const userNames = [
  "dashjeevanJyoti",
  "doeJohn",
  "lexyHoe",
  "hasiandaHula",
  "thakurBikdoe",
];

console.log(linearSearch(userNames, "dashjeevanJyoti"));
