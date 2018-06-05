angular.module('rpsApp').controller('playCtl', function($scope, $state) {

  $scope.playerName = $state.params.name;
  $scope.choice = '';
  // $scope.rock;
  // $scope.paper;
  // $scope.scissors;
  $scope.bot = '';
  $scope.message = '';

  $scope.checkBot = function(choice) {
    $scope.choice = choice;
    var bot = getRandomBot(1,3);
    if (bot === 1) {
      $scope.bot = 'rock';
    }
    else if (bot === 2) {
      $scope.bot = 'paper';
    }
    else if (bot === 3) {
      $scope.bot = 'scissors';
    }
    getWinner($scope.choice, $scope.bot);
  };

  $scope.reset = function() {
    $scope.choice = '';
    $scope.bot = '';
    $scope.message = '';
  }

  function getRandomBot(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function getWinner(player, bot) {
    if (player === 'rock' && bot === 'scissors') {
      $scope.message = $scope.playerName + ', you win!';
    }
    else if (player === 'paper' && bot === 'rock') {
      $scope.message = $scope.playerName + ', you win!';
    }
    else if (player === 'scissors' && bot === 'paper') {
      $scope.message = $scope.playerName + ', you win!';
    }
    else if (player === 'rock' && bot === 'paper') {
      $scope.message = $scope.playerName + ', you lose.';
    }
    else if (player === 'paper' && bot === 'scissors') {
      $scope.message = $scope.playerName + ', you lose.';
    }
    else if (player === 'scissors' && bot === 'rock') {
      $scope.message = $scope.playerName + ', you lose.';
    }
    else {
      $scope.message = 'Nobody wins. Try again.';
    }
  };


});
