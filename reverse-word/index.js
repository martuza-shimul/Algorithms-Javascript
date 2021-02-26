function reversLetters(word) {
  let wordArr = word.toLowerCase().split("");
  let reversed = [];

  for (let i = wordArr.length - 1; i >= 0; i--) {
    reversed.push(wordArr[i]);
  }

  let returnWord = reversed.join("");
  return returnWord;
}

function reverseWords(string) {
  var stringArr = string.split(" ");
  var returnString = [];

  for (let i = 0; i < stringArr.length; i++) {
    returnString.push(reversLetters(stringArr[i]));
  }

  return returnString.join(" ");
}

console.log(reverseWords("I don't like JavaScript"));
