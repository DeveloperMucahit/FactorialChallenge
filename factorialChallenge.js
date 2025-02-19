const factorial = n => n === 0 ? 1 : n < 0 ? 'Plase enter zero or greater!' : n * factorial(n - 1);

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-5)); // 1
console.log(factorial(7)); // 5040