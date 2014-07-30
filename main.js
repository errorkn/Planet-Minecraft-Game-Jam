// Hit the run button to begin! ------------>
confirm("Read the text in the console, then answer the question!");
console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
console.log("Hello! This is a choose your own adventure game.");
console.log("This type of game is very simple.");
console.log("You have to look at the text in the console. (The black thingy, where this text is in!)");
console.log("Then, answer the question at the top of your screen.");
console.log("You have to type the two answers exactly how they are written.");
console.log("Also, don't click the X, as it will ruin the game.");
console.log("That's about it! Let's get to the game!");
console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
var username = prompt("What is our hero's name?");
console.log("Our story starts with " + username + ".");
console.log("He is quite ordinary, doing the same thing everyday.");
console.log("What will " + username + " do?");
var question = prompt("Examine Window --- Watch TV");
if (question === "Examine Window") {console.log("You examine the window.");
  console.log("Oh my! It seems a giant meteor is coming straight toward him!");
  console.log(username + " backs away from the window. That meteor could take minutes, days, or weeks untill impact!");
  console.log(username + " was clueless. How did it get there? Why is it coming for them? Has there been a warning? Will it blow   up Earth?");
  console.log(username + " decided to learn more about the meteor. What should he do?");
  var hug = prompt("Head To Porch --- Watch TV");
  if (hug === "Watch TV") {console.log("*Insert Story*");
    
  }
}
