console.log("Welcome to Guess game...");

const answer = Math.floor(Math.random() * 10) + 1;
let guesses = 0;

document.getElementById("checkguess").onclick = function () {
  console.log("Welcome to Guess game...");
  guesses += 1;
  let guess = parseInt(document.getElementById("inputofnumber").value);
  console.log(guess);
  if (guess == answer) {
    document.getElementById("numberofguess").innerHTML = guesses;
    document.getElementById("help").innerHTML = "Correct!!!";
    console.log(`You guessed it correct in ${guesses} !!! Congrats...`);
  } else if (guess < answer) {
    document.getElementById("numberofguess").innerHTML = guesses;
    document.getElementById("help").innerHTML = "low!";
    console.log("Your guess is less...");
  } else if (guess > answer) {
    document.getElementById("numberofguess").innerHTML = guesses;
    document.getElementById("help").innerHTML = "high!";
    console.log("Your guess is more...");
  } else {
    document.getElementById("numberofguess").innerHTML = guesses;
    document.getElementById("help").innerHTML = "Out of Bound!";
    console.log("Your guess is out of bound!");
  }
}

let mode=true;
const themetogglebtn = document.querySelector('.credits');

themetogglebtn.addEventListener('click',() => {
   document.body.classList.toggle('dark-mode'); 
})
