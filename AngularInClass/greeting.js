function sayHello(word) {
    return "Hello" + word;
}
var providedWord = "World";
document.getElementById("wordToReplace").innerHTML = sayHello(providedWord);
