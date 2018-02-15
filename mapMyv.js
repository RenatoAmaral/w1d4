var words = ["ground", "control", "to", "major", "tom"];

var a = map(words, function(word) {
  return word.length;
});

var b = map(words, function(word) {
  return word.toUpperCase();
});

var c = map(words, function(word) {
  return word.split('').reverse().join('');
});



function map(words, callback){
  var results =[]
   for (var i = 0; i < words.length; i++) {
     results.push(callback(words[i]))
   }
   return results;

}

console.log(a);
console.log(b);
console.log(c);

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


