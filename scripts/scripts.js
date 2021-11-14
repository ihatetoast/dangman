console.log("scripts loaded");
const WORDS_ARRAY = ['wheel', 'hamburger', 'coffee', 'muffin', 'sandwich'];
const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', getWords);

function getWords() {
    // alert('Katy stinks!');
    const targetIndex = Math.floor(Math.random() * WORDS_ARRAY.length);
    const word = WORDS_ARRAY[targetIndex];
    console.log(word);
}