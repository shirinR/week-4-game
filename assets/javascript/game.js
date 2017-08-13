// Pseudo code >>>>
// #computerGuess # is between 19-120
// Each crystal # is between 1-12
// each time you click on a crystal that should add the random assigned number of the crsytal o the total score(update th html)
// Goal: match total score with the random number
// if match >> win
// if not loss
// Status should show Win! or loss!
// and then reset the game
$(document).ready(function(){
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  var finished = false;

  var computerGuess = function(){
    return randomNum(19,120);
  };
  var computerGuess = randomNum(19,120);

  var crystal = function(){
    return randomNum(1,12);
  };

  function randomNum(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  };

  $('#computerGuess').html('<strong>Computer guess: ' + computerGuess + '</strong>');
  var crystalNum1 = crystal();
  var crystalNum2 = crystal();
  var crystalNum3 = crystal();
  var crystalNum4 = crystal();
  $("#crystal1").click(function(){
    totalScore += crystalNum1;
    $("#guessValue").html('<strong>' + totalScore+ '</strong>');
    compareResults();
  });
  $("#crystal2").click(function(){
    totalScore += crystalNum2;
    $("#guessValue").html('<strong>' + totalScore+ '</strong>');
    compareResults();
  });
  $("#crystal3").click(function(){
    totalScore += crystalNum3;
    $("#guessValue").html('<strong>' + totalScore+ '</strong>');
    compareResults();
  });
  $("#crystal4").click(function(){
    totalScore += crystalNum4;
    $("#guessValue").html('<strong>' + totalScore+ '</strong>');
    compareResults();
  });

  function timeOut(){
    setTimeout(function () {
      finished = false
      resetvalue();
    }, 1000);
  };

  function compareResults(){
    if (totalScore === computerGuess) {
      wins++;
      $("#wins").html('<p>Wins: ' + wins + '</p>');
      $("#status").html('<strong>Status >> WIN!!!! </strong>');
      alert('WIN!!!!!');
      finished = true;
      timeOut();

    } else if (totalScore > computerGuess){
      losses++;
      $("#losses").html('<p>Losses: ' + losses + '</p>');
      $("#status").html('<strong>Status >> LOST!!!! </strong>');
      alert('LOST!!!!!');
      finished = true;
      timeOut();

    } else {
      console.log('Keep guessing!');
    }
  };

  function resetvalue(){
    console.log('RESET!!!!!');
    totalScore = 0;
    wins = 0;
    losses = 0;
    computerGuess = randomNum(19,120);
    crystalNum1 = crystal();
    crystalNum2 = crystal();
    crystalNum3 = crystal();
    crystalNum4 = crystal();
    $("#status").html('<strong>Status >> </strong>');
    $("#wins").html('<p>Wins: 0</p>');
    $("#losses").html('<p>Losses: 0</p>');
    $("#guessValue").html('<strong>0</strong>');
    $('#computerGuess').html('<strong>Computer guess: ' + computerGuess + '</strong>');

    alert('LET\'s START A FRESH GAME');
  };
});
