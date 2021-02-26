function reverseWords(string) {
  var stringArr = string.toLowerCase().split(" ");
  var returnString = [];

  stringArr.forEach((word) => {
    var reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
    returnString.push(reversed);
  });

  return returnString.join(" ");
}

console.log(reverseWords("I don't like JavaScript :D"));
