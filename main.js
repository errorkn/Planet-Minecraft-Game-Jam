//Hit the run button to begin! ------------>
confirm("Read the text in the console, then answer the question!")
console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
console.log("Hello! This is a choose your own adventure game.")
console.log("This type of game is very simple.")
console.log("You have to look at the text in the console. (The black thingy, where this text is in!)")
console.log("Then, answer the question at the top of your screen.")
console.log("You have to type the two answers exactly how they are written.")
console.log("Also, don't click the X, as it will ruin the game.")
console.log("Finally, there are multiple endings to the game. Try to find them all!")
console.log("That's about it! Let's get to the game!")
console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
var username = prompt("What is our hero's name?")
console.log("Our story starts with " + username + ".")
console.log("He is quite ordinary, doing the same thing everyday.")
console.log("What will " + username + " do?")
var question = prompt("Examine Window --- Watch TV")
if (question === "Examine Window") {console.log("You examine the window.")
    console.log("Oh my! It seems a giant meteor is coming straight toward him!")
    console.log(username + " backs away from the window. That meteor could take minutes, days, or weeks untill impact!")
	console.log(username + " was clueless. How did it get there? Why is it coming for them? Has there been a warning? Will it blow up Earth?")
	console.log(username + " decided to learn more about the meteor. What should he do?")
	var hug = prompt("Head To Porch --- Watch TV")
	if (hug === "Watch TV") {console.log(username + " thought the best thing to do was check the news.")
		console.log("He watched and was frightened! It was due for impact three hours!")
		console.log("Luckily, it would only destroy a little part of the city, but they reccomended everyone to evacuate.")
		console.log("As " + username + " was about to leave, he thought to himself: It's a small meteor compared to most ones. Why doesn't he try to be a hero?")
		var hug2 = prompt("Be The Hero --- Evacuate")
		if (hug2 === "Be The Hero") {
    	
		} else {
            console.log(username + " thought it was best not to risk himself. After all, you can always rebuild!")
			}
		


		} //else 2
	}  //end of branch one.

//ending credits and easter egg
console.log("Thanks for playing!")
console.log("Credits:")
console.log("errorkn for programming")
console.log("LDX for programming")
var lol = prompt("Please describe the game in a couple of words.")
if (lol === "degdeg") {console.log("( ͡° ͜ʖ ͡°)")} else{console.log("Thanks for playing!")}        	
