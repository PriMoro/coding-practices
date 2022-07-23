// EXERCISE 1

// * Complete the isPositive function.
// * If 'a' is positive, return "YES".
// * If 'a' is 0, throw an Error with the message "Zero Error"
// * If 'a' is negative, throw an Error with the message "Negative Error"

function isPositive(a) {
  try {
    if (a > 0) {
      return "YES";
    } else {
      throw Error;
    }
  } catch (error) {
    if (a === 0) {
      throw new Error("Zero Error");
    } else {
      throw new Error("Negative Error");
    }
  }
}
console.log(isPositive(10)); // YES
console.log(isPositive(5)); // YES
console.log(isPositive(0)); // Zero Error
console.log(isPositive(-20)); // Negative Error
console.log(isPositive(-1)); // Negative Error
