// EXERCISE 3

function main() {
  const PI = Math.PI;
  let r = parseFloat(readLine());
  // area of the circle:
  console.log(r * r * PI);
  // perimeter of the circle:
  console.log(2 * PI * r);
  try {
    // redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
