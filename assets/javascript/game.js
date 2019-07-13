 // Array that holds the alphabet, computer will use this to pick a letter.
 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
                
 // Variables for score keeping.
 var wins = 0;
 var losses = 0;
 var guessesLeft = 10;
 var guessedLetters = [];
 
 var compGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
 console.log(compGuess);
 


 // Function that runs after on.key ()
 document.onkeyup = function(event) {
     var userGuess = event.key;
     // guessedLetters.push(userGuess);

     // Both guesses match = win
     if(userGuess === compGuess) {
         wins++;
         guessesLeft = 10;
         guessedLetters = [];
         alert("You Win! Hit 'Enter' to play again!");
         compGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
         console.log(compGuess);
         }
     // If not = loss
     else {
         guessesLeft--;
         guessedLetters.push(userGuess);
         }
     // If guesses left hits 0 = loss
     if(guessesLeft === 0) {
         losses++;
         guessesLeft = 10;
         guessedLetters = [];
         alert("You Lose! Try again!");
         compGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
         console.log(compGuess);
         }
 
 var html = 
 "<p>Wins: " + wins + "</p>" +
 "<br>" +
 "<p>Losses: " + losses + "</p>" +
 "<br>" +
 "<p>Guesses left: " + guessesLeft + "</p>" +
 "<br>" +
 "<p>Your guesses so far: " + guessedLetters + "</p>";

 document.querySelector("#Scoreboard").innerHTML = html;

 }  