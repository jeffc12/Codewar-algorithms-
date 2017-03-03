/* Aoccdrnig to a rscheearch at Cmabrigde Uinervtisy, it deosn't mttaer in waht oredr the ltteers in a wrod are,
the olny iprmoetnt tihng is taht the frist and lsat ltteer be at the rghit pclae.
The rset can be a toatl mses and you can sitll raed it wouthit porbelm. Tihs is bcuseae
the huamn mnid deos not raed ervey lteter by istlef, but the wrod as a wlohe.

*/

function jumble(strings){
  //check your percent of changed words on very bottom of the console!
  var stringArray = strings.split(' ');
  var newArray = [];
  stringArray.forEach( function (index) {
        return newArray.push(checkForEnding(index));
  })

  return newArray.map(function(adjusted) {
    return rotateInside(adjusted).join('');
  }).join(' ');
}

function checkForEnding(nestedArray) {

    var newArray = [];
    var newNested = nestedArray.split('');
    if ( newNested[newNested.length-1] === ',' || newNested[newNested.length-1] === '.' || newNested[newNested.length-1] === '!' || newNested[newNested.length-1] === '?') {

        var leftover = newNested.splice(newNested.length-1,newNested.length-1);

        newArray.push(newNested.join(''));
        newArray.push(leftover.join(''));

    }

        else {
        newArray.push(newNested.join(''));

        }
      return newArray;
}

function rotateInside(words) {

    var firstword = words[0].split('');
    for ( var i = 1; i < firstword.length-1; i++) {
            var j = Math.ceil(Math.random() * (i))
              var temp = firstword[i];
              firstword[i] = firstword[j];
              firstword[j] = temp;

    }

      words[0] = firstword.join('');
      return words;



}
//test
// var string = `According to a researcher at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be at the right place. The rest can be a total mess and you can still read it without problem. This is because the human mind does not read every letter by itself but the word as a whole.`;
