console.log("scripts loaded");

const targetWord = "testword";
// takes in a string, returns array of dashes
const makeDashes = (str) => {
  return str.split("").map((ltr) => " - ");
};
const testword = makeDashes(targetWord);
