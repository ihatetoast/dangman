const WORDS_ARRAY = ["wheel", "zelda", "coffee", "muffin", "pizza"];
// HTML VARS
const startBtn = document.querySelector("#start");
const dashes = document.getElementById("gamedashes");

// startGame called once. Should deactivate button
const startGame = () => {
  const gameWord = getWord();
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
  const word = WORDS_ARRAY[targetIndex];
  return word;
}
// makeGameDashes once
const makeGameDashes = (str) => {
  let dashStr = "<p>";
  const dashArr = str.split("").map((ltr) => " _ ");
  dashArr.forEach((dash) => {});
  dashArr.forEach((ltr, idx) => {
    dashStr += '<span data-location="' + idx + '">' + ltr + "</span>";
  });
  dashStr += "</p>";
  dashes.innerHTML = dashStr; 
};

const runGameFeature = (word) => {
  let guess = ''
  let correct = false // try an isGameOver. what does correct mean? that the letter is in the word or that the word has been guessed?

  do {
    guess = prompt("Guess a letter of the word I'm thinking about?")

    if (guess === null) {
      alert('The game as been aborted.') // alerts are the worst. just have this in the console.
      return;
    }

    correct = checkGuess(word, guess)
  } while(!correct)
}

const checkGuess = (word, guess) => {
  let correct = false

  console.log('checkGuess', word)
  if(word.includes(guess)) {
    correct = true // this will stop the game loop, but all you're doing is saying that the letter is in the word. 
    // this means the game is over once one letter is guessed. 
    // how will you handle good guesses? maybe loop over the random word array with a forEach. 
    // when the letter guessed === letter in the word, replace the dash in the array of dashes with the letter at the same index.
    // ['p', 'i', 'e']  if user guesses i, then get the index (1)
    // ['-', '-', '-'] and at index 1 here, replace dash with i so it becomes
    // ['-', 'i', '-']
  } else {
    alert('Off with your head')
    // how will you handle misses? keep track of bad guesses: head, torso,4 limbs = 5. when badguesses === 5, game is over (isGameOver = true or something)
  }
}

//get a random word - chk
//break word into single letter strings

//Guess ===
////true if player gets right letter
////false if player gets wrong letter
//Use do while loop 
