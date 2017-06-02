//1. I want to roll the die and get the numbers of the
//list instead of random numbers.

//2. The die starts rolling from 0, incrementing once at
//time --> var roll = something++

//3. I want to go through all the elements of the list

//4. The output is the numbers in the list everytime I roll
//the die


function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var roll = 0;
    return function() {
      var results = list[roll++];
      return results;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6