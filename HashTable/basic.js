// Basic Hash function
function hash(key, arrLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    const char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrLen;
  }
  return total;
}

console.log("Basic Hash Function");
console.log(hash("white", 10));
console.log(hash("black", 10));
console.log(hash("orange", 10));
console.log(hash("green", 10));
console.log(hash("red", 10));

// Hash function using weird prime
function hashPrime(key, arrLen) {
  let total = 0;
  let weird_prime = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    let value = char.charCodeAt(0) - 96;

    total = (total * weird_prime + value) % arrLen;
  }
  return total;
}

console.log("Basic Hash Function using weird prime");
console.log(hashPrime("white", 11));
console.log(hashPrime("black", 11));
console.log(hashPrime("orange", 11));
console.log(hashPrime("green", 11));
console.log(hashPrime("red", 11));
