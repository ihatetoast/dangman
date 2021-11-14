const WORDS_ARRAY = ["wheel", "hamburger", "coffee", "muffin", "sandwich"];
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
