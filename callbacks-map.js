var words = ["ground", "control", "to", "major", "tom"];

function map(array, wordLength) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(wordLength(array[i]));
  }
  return result;
}

var wordLength = map(words, function(words) {
  return words.length;
});

console.log(wordLength);
