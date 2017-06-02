//1. I want to take a number X and return a function
//that counts down when it is called

//2. I can create a var. This var will be decreasing

//3.




var countdownGenerator = function (x) {
  var time = x;
  return function () {
    var count = time --;
      if (time >= 0) {
        console.log("T-minus " + count);
      }
      else if (time = 0) {
        console.log("Blast Off!!!");
      }
      else {
       console.log("Rockets already gone, bub!")
    }
  }
};
  /* your code here */

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!