window.onload = function() {
  var totalScore = 0
  var finished = false;

  var crystalGame = {
    wins: 0,
    losses: 0,

    computerGuess: function(){
      return crystalGame.randomIntFromInterval(19,120);
    },
    crystal1: function(){
      return crystalGame.randomIntFromInterval(1,12);
    },
    crystal2: function(){
      return crystalGame.randomIntFromInterval(1,12);
    },
    crystal3: function(){
      return crystalGame.randomIntFromInterval(1,12);
    },
    crystal4: function(){
      return crystalGame.randomIntFromInterval(1,12);
    },
    randomIntFromInterval: function(min,max){
      return Math.floor(Math.random()*(max-min+1)+min);
    },

    resetvalue: function(){
      console.log('RESET!!!!!');
      crystalGame.totalScore = 0;
      crystalGame.wins = 0;
      crystalGame.losses = 0;
      computerGuess = crystalGame.randomIntFromInterval(19,120);
      crystalNum1 = crystalGame.crystal1();
      crystalNum2 = crystalGame.crystal2();
      crystalNum3 = crystalGame.crystal3();
      crystalNum4 = crystalGame.crystal4();
      $("#status").html('<p><strong>Status >> </strong></p>');
      $("#wins").html('<p>Wins: 0</p>');
      $("#losses").html('<p>Losses: 0</p>');
      $("#guessValue").html('<p id="guessValue"><strong>0</strong></p>');
      $('#computerGuess').html('<strong><h3>Computer guess: ' + crystalGame.computerGuess() + '</h3></strong>');
      finished = false;
    },

    compareResults: function(){
      if (totalScore === crystalGame.computerGuess()) {
        crystalGame.wins++;
        $("#wins").html('<p>Wins: ' + crystalGame.wins + '</p>');
        $("#status").html('<p ><strong>Status >> WIN!!!! </strong></p>');
        finished = true
        setTimeout(function () {
          crystalGame.resetvalue();
        }, 3000);
        alert('WIN!!!!!')

      } else if (totalScore > crystalGame.computerGuess()){

        crystalGame.losses++;
        $("#losses").html('<p>Losses: ' + crystalGame.losses + '</p>');
        $("#status").html('<p><strong>Status >> LOST!!!! </strong></p>');
        // alert('LOST!!!!!')
        finished = true
        setTimeout(function () {
          crystalGame.resetvalue();
        }, 3000);
        alert('LOST!!!!!')
        
      } else {
        console.log('Keep guessing!');
      }
    }

  }

  $('#computerGuess').html('<strong>Computer guess: ' + crystalGame.computerGuess() + '</strong>');
  $("#crystal1").click(function(){
    if (finished) {
      return
    }
    totalScore += crystalNum1;
    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
    crystalGame.compareResults();
  });
  $("#crystal2").click(function(){
    if (finished) {
      return
    }
    totalScore += crystalNum2;
    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
    crystalGame.compareResults();
  });
  $("#crystal3").click(function(){
    if (finished) {
      return
    }
    totalScore += crystalNum3;
    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
    crystalGame.compareResults();
  });
  $("#crystal4").click(function(){
    if (finished) {
      return
    }
    totalScore += crystalNum4;
    $("#guessValue").html('<p id="guessValue"><strong><h1>' + totalScore+ '</h1></strong></p>');
    crystalGame.compareResults();
  });

  var crystalNum1 = crystalGame.crystal1();
  var crystalNum2 = crystalGame.crystal2();
  var crystalNum3 = crystalGame.crystal3();
  var crystalNum4 = crystalGame.crystal4();

};
