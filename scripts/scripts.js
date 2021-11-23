const WORDS_ARRAY = ["wheel", "zelda", "coffee", "muffin", "pizza"];
// HTML VARS
const startBtn = document.querySelector("#start");
const dashes = document.getElementById("gamedashes");

let dashArr;
let gameWord;
let incorrectGuesses = 0;
let isGameOver = false 

// startGame called once. Should deactivate button
const startGame = () => {
  gameWord = getWord();
  console.log("gameword is:");
  console.log(gameWord);
  // disable start button
  startBtn.classList.add("disabled");
  makeGameDashes(gameWord);
  runGameFeature(gameWord);
};
startBtn.addEventListener("click", startGame);

function getWord() {
  const targetIndex = Math.floor(Math.random() * WORDS_ARRAY.length);
  gameWord = WORDS_ARRAY[targetIndex].split("");
  console.log(gameWord)
  return gameWord;
}

// makeGameDashes once
const makeGameDashes = (arr) => {
  let dashStr = "<p>";
  dashArr = arr.map((ltr) => "_");
  console.log(dashArr)
  dashArr.forEach((dash, idx) => {
    // dashStr += '<span data-location="' + idx + '">' + ltr + "</span>";
    dashStr += `<span data-location="${idx}">${dash}</span>`
  });
  dashStr += "</p>";
  dashes.innerHTML = dashStr; 
};

const runGameFeature = (word) => {
  let guess = ''

  do {
    guess = prompt("Guess a letter of the word I'm thinking about?")
    
    if (guess === null) {
      alert('The game has been aborted.')
      return;
    }
    checkGuess(word, guess)
    confirmGameOver()
  } while(!isGameOver)

}

const checkGuess = (word, guess) => {
  // console.log('checkGuess', word)
  if(word.includes(guess)) {
    handleCorrectGuess(guess);
    // makeGameDashes(dashArr)
    console.log(dashArr);
  } else {
    handleBadGuess();
    // how will you handle misses? keep track of bad guesses: head, torso,4 limbs = 5. when badguesses === 5, game is over (isGameOver = true or something)
  }
}
const handleCorrectGuess = (guess) => {
  gameWord.forEach((ltr, idx) => {
    if(ltr === guess) {
      dashArr[idx] = ltr
    }
  })
}
const handleBadGuess = () => {
  incorrectGuesses++
  console.log(incorrectGuesses)
  //put bad guesses on the DOM
}
const confirmGameOver = () => {
  if(incorrectGuesses === 6) {
    isGameOver = true
  } 
  if(dashArr.indexOf("_") === -1) {
    isGameOver = true
  }
  //clean up this
}
//get a random word
//break word into single letter strings

//Guess ===
//put guess in a input 
////true if player gets right letter
////false if player gets wrong letter
//Use do while loop 

//change prompt to input field
//render the dashes on their own to DOM 
//in makeGameDashes function should only make dashes