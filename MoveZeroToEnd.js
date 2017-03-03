
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
   var count = 0; 
   var newArr = arr.filter( function (Search) { 
  
      if (Search === 0) {
      count++;
      }
      return Search !== 0;
  })
    for (var i = 0; i < count; i++ ) {
      newArr.push(0);
    }
    return newArr;
}
