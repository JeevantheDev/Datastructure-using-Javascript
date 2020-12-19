class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let weird_prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weird_prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index];
        }
      }
    }
    return undefined;
  }

  values() {
    let arr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!arr.includes(this.keyMap[i][j][1])) {
            arr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return arr;
  }
  keys() {
    let arr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!arr.includes(this.keyMap[i][j][0])) {
            arr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return arr;
  }
}

const h = new HashTable();

// function sortString(str) {
//   return str.split("").sort().join("");
// }

// strs.forEach((s) => {
//   h._hash(sortString(s));
// });
// strs.forEach((s) => {
//   h.set(sortString(s), s);
// });
// var result = [];
// var temp = [];
// h.keys().forEach((s) => {
//   h.get(s).forEach((v) => {
//     if (v[0] === s) {
//       temp.push(v[1]);
//     }
//   });
//   result.push([].concat(...temp));
//   temp = [];
// });
// console.log(result);

console.log("Generating Hash Key:- ");
console.log("white", h._hash("white"));
console.log("black", h._hash("black"));
console.log("green", h._hash("green"));
console.log("red", h._hash("red"));
console.log("blue", h._hash("blue"));
console.log("Set key value pair");
h.set("white", "#fff");
h.set("black", "#ccc");
h.set("green", "#00ff0d");
h.set("red", "#ff0000");
h.set("blue", "#000dff");
h.set("blue", "#8e93f5");
console.log(h.keyMap);
console.log("Get key value pair according to given key");
console.log(h.get("white"));
console.log(h.get("blue"));
console.log("Get all values");
console.log(h.values());
console.log("Get all keys");
console.log(h.keys());

// Group anagram problem
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    const s = uniform(str);
    let l = map.get(s) || [];
    l.push(str);
    map.set(s, l);
  }
  return Array.from(map.values());
};

var uniform = function (str) {
  return str.split("").sort().join("");
};
console.log(groupAnagrams(strs));
