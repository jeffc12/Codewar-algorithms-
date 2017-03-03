function generateHashtag (str) {

if (typeof str !== 'string' || str === '') {
return false;
}
  var hashtagArray = [];
  var ArrayString = str.toLowerCase().split(' ');

  console.log(ArrayString);
if (ArrayString[0] === '') {
    ArrayString[0] = '#';
}
else if (typeof ArrayString[0] === 'string') {
    ArrayString.unshift('#');
}
console.log(ArrayString);
for(var i = 0 ; i < ArrayString.length ; i++){
        ArrayString[i] = ArrayString[i].charAt(0).toUpperCase()+ ArrayString[i].substr(1);;
    }


  //console.log(ArrayString);
  hashtagArray.push(ArrayString.join(''));

  hashtagArray = hashtagArray.join('');
  console.log(hashtagArray);

if (hashtagArray.length <= 140) {
return hashtagArray;
}

else  {

return false;
}

}
