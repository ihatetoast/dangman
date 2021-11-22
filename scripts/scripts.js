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
  let correct = false

  do {
    guess = prompt("Guess a letter of the word I'm thinking about?")

    if (guess === null) {
      alert('The game as been aborted.')
      return;
    }

    correct = checkGuess(word, guess)
  } while(!correct)
}

const checkGuess = (word, guess) => {
  let correct = false

  console.log('checkGuess', word)
  if(word.includes(guess)) {
    correct = true
  } else {
    alert('Off with your head')
  }
}

//get a random word - chk
//break word into single letter strings

//Guess ===
////true if player gets right letter
////false if player gets wrong letter
//Use do while loop 
