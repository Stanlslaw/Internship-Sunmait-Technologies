var wordCounter = function(text) {
  let wordArr =String(text).toLowerCase().split(/[.,!? ]/);
  console.log(wordArr);
  wordArr=wordArr.filter(el=>el!="")
  function count(word){
    return wordArr.filter(w=>w==String(word).toLowerCase()).length;
  }
 return {
  count: count
 }
};

let counter = wordCounter("hey dude hey men i know dude that i men");
console.log(counter.count("dude"))

// var wordCounter = function(text) {
//   function count(word){
//     if(word.match(/[,?!. ]/)){return 0}
//     const matches = text.match(new RegExp(word, "gi"));
//     console.log(matches)
//     return matches? matches.length:0;
//   }
//  return {
//   count: count
//  }
// };
