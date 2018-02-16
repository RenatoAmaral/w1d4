var countdownGenerator = function (x) {
  /* your code here */
  var count = x + 1;

    return function() {
    /* your code here */
      if(count > 1){
        count -= 1;
        return `T-minus ${count}...`;
      }else if (count <=0){
        count -= 1;
        return 'Rockets already gone, bub!';
      }else {
        count -= 1;
        return `Blast Off!`;
      }
  }

};

var countdown = countdownGenerator(5);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!