let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('guesses');

let answer = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
console.log(answer);
let numGuesses = 0;

btn.addEventListener('click', ()=>{
    guessesNumber();
});

function guessesNumber(){
    if (input.value<1 || input.value>100 || isNaN(input.value)){
        // wrng.textContent = 'Please enter a number between 1 and 100';
        wrng.innerHTML = 'Please enter a number between 1 and 100';
    }
    else{
        numGuesses++;
        guesses.innerHTML += "No. of Guess: " + numGuesses
        if(input.value > answer){
            wrng.innerHTML = 'Too high';
        } else if(input.value < answer){
            wrng.innerHTML = 'Too low';
        } else {
            wrng.innerHTML = 'Congratulations! You got it right!';
            wrng.style.backgroundColor = 'green';
            setTimeout(() => {
                // location.reload(); [This will reload the page and the game will start again]
                resetGame();
            }, 5000); // Reload the page after 5 seconds 
        }
    }
}

function resetGame(){
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = '';
    guesses.innerHTML = "No. of Guess: 0";
}