// EXERCISE 2
function factorial(n) {
  if (n === 0 || n === 1) {
    //Facorial 0! = 1 and 1! = 1

    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4)); //24
console.log(factorial(5)); //120
console.log(factorial(6)); //720
console.log(factorial(10)); //3628800
console.log(factorial(15)); //1307674368000
