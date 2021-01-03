// Fibonacci number find (without DP)
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(6));
// Big O is O(2^n)
// -------------------------------------------------------------------------------------------------------------
// Using Memorization
function fibMemo(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  var res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  console.log(memo);
  return res;
}
console.log(fibMemo(13));
// Big O is O(N)
