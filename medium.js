//medium
let userInput = prompt("Please type your message here");
if (userInput === userInput.toUpperCase()) {
    console.log("Why are you screaming?")
}
else if (userInput === userInput.toLowerCase()) {
    console.log("Please speak up")
}
else {
    console.log("Perfect volume")
}