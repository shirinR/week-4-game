window.onload = function() {

  $('#computerGuess').html('<strong>Computer guess: ' + crystalGame.computerGuess + '</strong>');

  $("#crystal1").on("click",function(){
    totalScore += crystalNum1;
    $("#guessValue").html('<p><strong><h1>' + totalScore + '</h1></strong></p>');
  });

  $("#crystal2").on("click",function(){
    totalScore += crystalNum2;
    $("#guessValue").html('<p><strong><h1>' + totalScore + '</h1></strong></p>');
  });

  $("#crystal3").on("click",function(){
    totalScore += crystalNum3;
    $("#guessValue").html('<p><strong><h1>' + totalScore + '</h1></strong></p>');
  });

  $("#crystal4").on("click",function(){
    totalScore += crystalNum4;
    $("#guessValue").html('<p><strong><h1>' + totalScore + '</h1></strong></p>');
  });

  if (totalScore===computerGuess){
    wins++;
    $("#wins").html('<p>Wins: ' + wins + '</p>');
    $("#status").html('<p><strong>Status >> <h1>WIN!!!! </strong></p>');
    crystalGame.reset;

  }else{
    losses++;
    $("#losses").html('<p>Losses: ' + losses + '</p>');
    $("#status").html('<p><strong>Status >> <h2>LOST!!!!</h2> </strong></p>');
    crystalGame.reset;
  }

};

var totalScore = 0

var crystalNum1 = crystalGame.crystal1();
var crystalNum2 = crystalGame.crystal2();
var crystalNum3 = crystalGame.crystal3();
var crystalNum4 = crystalGame.crystal4();

var crystalGame = {

  wins = 0,
  losses = 0,

  computerGuess = function(){
    crystalGame.randomIntFromInterval(19,120);
  },

  crystal1 = function(){
    crystalGame.randomIntFromInterval(1,12);
  },

  crystal2 = function(){
    crystalGame.randomIntFromInterval(1,12);
  },

  crystal3 = function(){
    crystalGame.randomIntFromInterval(1,12);
  },

  crystal4 = function(){
    crystalGame.randomIntFromInterval(1,12);
  },

  randomIntFromInterval = function(min,max){
    Math.floor(Math.random()*(max-min+1)+min);
  },

  reset = function(){
    totalScore = 0;
    crystalGame.wins = 0;
    crystalGame.losses = 0;
  }

};
