// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


let wordValue = ""
function initialPrompt() {
wordValue = input.question("Let's play some scrabble! Enter a word:")
 return 
};

let simpleScore = function(word){
return word.length; 
};


let vowelBonusScore = function(word){
   let points = 0
  let vowel = "aeiou"
  for (i = 0; i < word.length; i++){
    if(vowel.includes(word[i].toLowerCase())){
      points += 3
    } else {
    points += 1}
  }
return points;
}
let scrabbleScore;

const scoringAlgorithms = [
{ name: "Simple score",
  description: "Each letter is worth 1 point",
  score: simpleScore
},
{ name: "Bonus Vowel",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  score: vowelBonusScore
},
{ name: "Scrabble",	
  description: "The traditional scoring algorithm",
  score: oldScrabbleScorer
},
]
let scoreSelect = 0
function scorerPrompt() {scoreSelect = Number(input.question(`Please select a scoring method: \n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\n`))

if (scoreSelect === 0){
  console.log(`${scoringAlgorithms[0].score(wordValue)}`)
} else if (scoreSelect === 1)
  console.log(`${scoringAlgorithms[1].score(wordValue)}`)
  else if (scoreSelect === 2)
  console.log(`${scoringAlgorithms[2].score(wordValue)}`)

}



function transform(oldPointStructure){
let newObj = {}
for (key of oldPointStructure) 
  for (let points of oldPointStructure[key])
console.log(newObj)}

let newPointStructure = transform(oldPointStructure)

function runProgram() {
   const wordValue = initialPrompt()
   const scoreValue = scorerPrompt()
   //console.log(simpleScore(wordValue))
   //initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

