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

  $("#crystal1").on("click",function(){

    // var crystalNum1 = crystal1();
    totalScore += crystalNum1;
    console.log('cc ' + crystalNum1);
    console.log('totalScore ' + totalScore);

    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
  });

  $("#crystal2").on("click",function(){

    // var crystalNum2 = crystal2();
    totalScore += crystalNum2;

    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
  });

  $("#crystal3").on("click",function(){

    // var crystalNum3 = crystal3();
    totalScore += crystalNum3;

    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
  });

  $("#crystal4").on("click",function(){

    // var crystalNum4 = crystal4();
    totalScore += crystalNum4;

    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
  });

  if (totalScore===computerGuess) {
    wins++;
    $("#wins").html('<p>Wins: ' + wins + '</p>');
    $("#status").html('<p ><strong>Status >> WIN!!!! </strong></p>');

  } else {

    losses++;
    $("#losses").html('<p>Losses: ' + losses + '</p>');
    $("#status").html('<p><strong>Status >> LOST!!!! </strong></p>');
  }

});
