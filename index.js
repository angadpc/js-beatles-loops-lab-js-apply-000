// add solution here
function theBeatlesPlay(musicArray, instrumentArray) {
  var array = [];
  for (var i = 0; i < musicArray.length; i++) {
    var newStr = musicArray[i] + " plays " + instrumentArray[i];
    array[i] = newStr;
  }
  return array;
}

function johnLennonFacts(factsArray) {
  var lengthOfArray = 0;
  while(lengthOfArray < factsArray.length) {
    factsArray[lengthOfArray] = factsArray[lengthOfArray] + "!!!";
    lengthOfArray++;
  }
  return factsArray;

}
