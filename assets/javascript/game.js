// Pseudo code >>>>
// #computerGuess # is between 19-120
// Each crystal # is between 1-12
// each time you click on a crystal that should add the random assigned number of the crsytal o the total score(update th html)
// Goal: match total score with the random number
// if match >> win
// if not loss
// Status should show Win! or loss!
// and then reset the gam
$(document).ready(function(){
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  var computerGuess = function(){
    return randomIntFromInterval(19,120);
  };
  var computerGuess = randomIntFromInterval(19,120);
  var crystal1 = function(){
    return randomIntFromInterval(1,12);
  };
  var crystal2 = function(){
    return randomIntFromInterval(1,12);
  };
  var crystal3 = function(){
    return randomIntFromInterval(1,12);
  };
  var crystal4 = function(){
    return randomIntFromInterval(1,12);
  };
  function randomIntFromInterval(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  $('#computerGuess').html('<strong><h3>Computer guess: ' + computerGuess + '</h3></strong>');
  var crystalNum1 = crystal1();
  var crystalNum2 = crystal2();
  var crystalNum3 = crystal3();
  var crystalNum4 = crystal4();
  $("#crystal1").click(function(){
    totalScore += crystalNum1;
    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
    compareResults();
  });
  $("#crystal2").click(function(){
    totalScore += crystalNum2;
    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
    compareResults();
  });
  $("#crystal3").click(function(){
    totalScore += crystalNum3;
    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
    compareResults();
  });
  $("#crystal4").click(function(){
    totalScore += crystalNum4;
    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
    compareResults();
  });
  function compareResults(){
    if (totalScore === computerGuess) {
      wins++;
      $("#wins").html('<p>Wins: ' + wins + '</p>');
      $("#status").html('<p ><strong>Status >> WIN!!!! </strong></p>');
      alert('WIN!!!!!')
      resetvalue();
    } else if (totalScore > computerGuess){
      losses++;
      $("#losses").html('<p>Losses: ' + losses + '</p>');
      $("#status").html('<p><strong>Status >> LOST!!!! </strong></p>');
      alert('LOST!!!!!')
      resetvalue();
    } else {
      console.log('Keep guessing!');
    }
  };
  function resetvalue(){
    console.log('RESET!!!!!');
    totalScore = 0;
    wins = 0;
    losses = 0;
    computerGuess = randomIntFromInterval(19,120);
    crystalNum1 = crystal1();
    crystalNum2 = crystal2();
    crystalNum3 = crystal3();
    crystalNum4 = crystal4();
    $("#status").html('<p><strong>Status >> </strong></p>');
    $("#wins").html('<p>Wins: 0</p>');
    $("#losses").html('<p>Losses: 0</p>');
    $("#guessValue").html('<p id="guessValue"><strong>0</strong></p>');
    $('#computerGuess').html('<strong><h3>Computer guess: ' + computerGuess + '</h3></strong>');
  };
});
