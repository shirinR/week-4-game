window.onload = function() {
  var totalScore = 0
  var finished = false;

  var crystalGame = {
    wins: 0,
    losses: 0,

    randomIntFromInterval: function(min,max){
      return Math.floor(Math.random()*(max-min+1)+min);
    },

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

    resetvalue: function(){
      console.log('RESET!!!!!');
      alert('Wait for 1 Second to RESET');
      crystalGame.totalScore = 0;
      crystalGame.wins = 0;
      crystalGame.losses = 0;
      computerGuess = crystalGame.randomIntFromInterval(19,120);
      crystalNum1 = crystalGame.crystal1();
      crystalNum2 = crystalGame.crystal2();
      crystalNum3 = crystalGame.crystal3();
      crystalNum4 = crystalGame.crystal4();
      $("#status").html('<strong>Status >> </strong>');
      $("#wins").html('<p>Wins: 0</p>');
      $("#losses").html('<p>Losses: 0</p>');
      $("#guessValue").html('<strong>0</strong>');
      $('#computerGuess').html('<strong>Computer guess: ' + crystalGame.computerGuess() + '</strong>');
      // finished = false;
      alert('LET\'S START FRESH AGAIN');
    },

    compareResults: function(){
      console.log('compareResults function');
      if (totalScore === crystalGame.computerGuess()) {
        console.log('win++');
        crystalGame.wins++;
        $("#wins").html('<p>Wins: ' + crystalGame.wins + '</p>');
        $("#status").html('<strong>Status >> WIN!!!! </strong>');
        console.log('WIN!!!!!')
        finished = true
        setTimeout(function () {
          crystalGame.resetvalue();
          finished = false
        }, 1000);

      } else if (totalScore > crystalGame.computerGuess()){
        console.log('losses++');
        crystalGame.losses++;
        $("#losses").html('<p>Losses: ' + crystalGame.losses + '</p>');
        $("#status").html('<strong>Status >> LOST!!!! </strong>');
        console.log('LOST!!!!!')
        finished = true
        setTimeout(function () {
          crystalGame.resetvalue();
          finished = false
        }, 1000);

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
    $("#guessValue").html('<strong>' + totalScore+ '</strong>');
    crystalGame.compareResults();
  });
  $("#crystal2").click(function(){
    if (finished) {
      return
    }
    totalScore += crystalNum2;
    $("#guessValue").html('<strong>' + totalScore+ '</strong>');
    crystalGame.compareResults();
  });
  $("#crystal3").click(function(){
    if (finished) {
      return
    }
    totalScore += crystalNum3;
    $("#guessValue").html('<strong>' + totalScore+ '</strong>');
    crystalGame.compareResults();
  });
  $("#crystal4").click(function(){
    if (finished) {
      return
    }
    totalScore += crystalNum4;
    $("#guessValue").html('<strong>' + totalScore+ '</strong>');
    crystalGame.compareResults();
  });

  var crystalNum1 = crystalGame.crystal1();
  var crystalNum2 = crystalGame.crystal2();
  var crystalNum3 = crystalGame.crystal3();
  var crystalNum4 = crystalGame.crystal4();

};
