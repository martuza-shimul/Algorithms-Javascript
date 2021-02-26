function isPalindrome(string) {
  var characters = string.toLowerCase().split("");
  var validChar = "abcdefghijklmnopqrstuvwxyz".split("");

  var letterArr = [];

  characters.forEach((char) => {
    if (validChar.indexOf(char) > -1) letterArr.push(char);
  });

  if (letterArr.join("") === letterArr.reverse().join("")) return true;
  else return false;
}

console.log(isPalindrome("Madam I'm Adam"));
console.log(isPalindrome("Eye"));
console.log(isPalindrome("I love JavaScript"));
