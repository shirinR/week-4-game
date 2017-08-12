window.onload = function() {

  $('#computerGuess').html('<strong>Computer guess: ' + crystalGame.computerGuess + '</strong>');
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
};

  var totalScore = 0
  var crystalNum1 = crystalGame.crystal1();
  var crystalNum2 = crystalGame.crystal2();
  var crystalNum3 = crystalGame.crystal3();
  var crystalNum4 = crystalGame.crystal4();

  var crystalGame = {
  wins: 0,
  losses: 0,

  computerGuess: function(){
    crystalGame.randomIntFromInterval(19,120);
  },
  crystal1: function(){
    crystalGame.randomIntFromInterval(1,12);
  },
  crystal2: function(){
    crystalGame.randomIntFromInterval(1,12);
  },
  crystal3: function(){
    crystalGame.randomIntFromInterval(1,12);
  },
  crystal4: function(){
    crystalGame.randomIntFromInterval(1,12);
  },
  randomIntFromInterval: function(min,max){
    Math.floor(Math.random()*(max-min+1)+min);
  },

  reset: function(){
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
    $('#computerGuess').html('<strong><h3>Computer guess: ' + compareResults.computerGuess + '</h3></strong>');
  },

  compareResults: function(){
    if (totalScore === compareResults.computerGuess) {
      wins++;
      $("#wins").html('<p>Wins: ' + compareResults.wins + '</p>');
      $("#status").html('<p ><strong>Status >> WIN!!!! </strong></p>');
      alert('WIN!!!!!')
      compareResults.resetvalue;
    } else if (totalScore > computerGuess){
      losses++;
      $("#losses").html('<p>Losses: ' + compareResults.losses + '</p>');
      $("#status").html('<p><strong>Status >> LOST!!!! </strong></p>');
      alert('LOST!!!!!')
      compareResults.resetvalue;
    } else {
      console.log('Keep guessing!');
    }
  },

};
