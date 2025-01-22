function myFunc() {
  let x = 10;
  if (true) {
    x = 20; // Modifies the outer x
  }
  console.log(x); // This will now log 20
}
//Alternatively, declare the variable outside the if block if you intend to use it both inside and outside the if block.