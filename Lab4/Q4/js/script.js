let sentence = prompt("Enter a sentence: ");
let reverse = "";
for (let i = (sentence.length - 1); i >= 0; i--) {
  reverse += sentence[i];
}

console.log(reverse);
