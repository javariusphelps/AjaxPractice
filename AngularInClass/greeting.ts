function sayHello(word): String {
  return "Hello" + word;
}
var providedWord = "World";

document.getElementById("wordToReplace").innerHTML = sayHello(providedWord);
