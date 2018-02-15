// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  //for (var i = 0; i < arr.length; i++) {
    innerArr = arr.forEach(function(element))
      if (innerArr === "Waldo") {
      found(innerArr);   // execute callback / add "i" to pass index
    }
  }
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


