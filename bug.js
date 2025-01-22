function myFunc() {
  let x = 10;
  if (true) {
    let x = 20; // This x is scoped to the if block
  }
  console.log(x); // This will log 10, not 20
}