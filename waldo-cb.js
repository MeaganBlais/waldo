// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var where
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr);   // execute callback
    }
  }
}

function actionWhenFound(arr) {
    var where = arr.indexOf('Waldo');
  console.log('Found Waldo at index ' + where + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

/* Modify the callback function in the previous example so that 
logs the index of the array where Waldo is found, ie. 
"Found Waldo at index 2!". 
(You will need to modify actionWhenFound to receive the index.) */