let input = prompt("Enter a number: ");

if (isNaN(input)) {
  console.log("INVALID INPUT");
} else if (input % 2 == 0) {
  console.log("The number is even!");
} else if (input % 0 != 0) {
  console.log("The number is odd!");
}
