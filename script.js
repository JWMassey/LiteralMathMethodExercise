//Literal Math Method Exercise//

//1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs."
//1b
console.log(warmHugs.toUpperCase());
//1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

//2a
let beenImpaled = "Oh, look at that. I've been impaled."
//2b
console.log(beenImpaled.slice(18));

//3a
let dotDotDot = "...";
//3b
let skullBones = `I don't have a skull ${dotDotDot} or bones.`

//4
console.log(Math.PI);

//5
randomNumber = Math.random();
randomNumber = Math.floor(randomNumber * 3) + 1;
console.log(randomNumber);

//Bonus//

//6
let letItGo = " Let it go!".toUpperCase().repeat(2);
console.log(letItGo);

//7a
let reindeers = "Reindeers are better than people.";
//7b
console.log(reindeers.replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_"));

//8
console.log(Math.sqrt(2));

//9
let newRandomNumber = Math.floor(Math.random() * 17) + 7
console.log(newRandomNumber);