

var scores, roundscore, activePlayer, gamePlaying, predefinedScore;
// function predefineScore() {
//   var predefinedScore = document.getElementById("myText").value;
//   return predefinedScore;
// }
init();
var lastValue;
// function myFunction() {
//   document.querySelector('#')
// }
// predefinedScore = getElementById('myText').value;
document.querySelector('.btn-roll').addEventListener('click',function() {

      if (gamePlaying) {
        // 1. Random numer
        var dice1 = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;

        // 2. Display the result
        var dice1DOM = document.querySelector('.dice1');
        var dice2DOM = document.querySelector('.dice2');
        dice1DOM.style.display= 'block';
        dice2DOM.style.display= 'block';
        dice1DOM.src = 'dice-'+dice1+'.png';
        dice2DOM.src = 'dice-'+dice2+'.png';

        // Update the round scores
            if(dice1 !==1 && dice2!==1)
           {
            // Add score
            roundScore +=dice1+dice2;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
          }
          else {
            // Next player
            nextPlayer();
          }
                }});


   document.querySelector('.btn-hold').addEventListener('click', function() {
     if (gamePlaying) {
              // Add current score to global score
       scores[activePlayer]+=roundScore;
       // Update the UI
       document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
       var input = document.querySelector('.set-score').value;
       // Check if there is an input
        var winningScore;
       if (input) {
         winningScore = input;
       } else {
         winningScore = 50;
       }
       // Check if player won the game
       if (scores[activePlayer]>=winningScore) {
         document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
         document.querySelector('.dice1').style.display='none';
         document.querySelector('.dice2').style.display='none';
         document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
         gamePlaying = false;
       } else {
         // Nest player
         nextPlayer();
       }
     }
    });

   function nextPlayer() {
     // Next player
     activePlayer===0 ? activePlayer = 1: activePlayer=0;
     roundScore = 0;
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     document.querySelector('.dice1').style.display='none';
     document.querySelector('.dice2').style.display='none';
   }

   document.querySelector('.btn-new').addEventListener('click',init);

   function init() {
     gamePlaying = true;
     scores=[0,0];
     roundScore = 0;
     activePlayer = 0;
     // predefinedScore = getElementById('myText').value;
     document.querySelector('.dice1').style.display='none';
     document.querySelector('.dice2').style.display='none';

     document.getElementById('score-0').textContent = '0';
     document.getElementById('score-1').textContent = '0';
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';
     document.getElementById('name-0').textContent = 'Player 1';
     document.getElementById('name-1').textContent = 'Player 2';
     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('winner');
     document.querySelector('.player-0-panel').classList.remove('active');
     document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.add('active');
   }
