angular.module('rpsApp').controller('playCtl', function($scope, $state) {

  $scope.playerName = $state.params.name;
  $scope.choice = '';
  $scope.bot = '';
  $scope.message = '';
  $scope.playerCount = 0;
  $scope.botCount = 0;

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

  $scope.playAgain = function() {
    $scope.choice = '';
    $scope.bot = '';
    $scope.message = '';
  }

  $scope.reset = function() {
    $scope.playAgain();
    $scope.playerCount = 0;
    $scope.botCount = 0;
  }

  function getRandomBot(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function getWinner(player, bot) {
    if ((player === 'rock' && bot === 'scissors') || (player === 'paper' && bot === 'rock') || (player === 'scissors' && bot === 'paper')) {
      $scope.playerCount++;
      $scope.message = $scope.playerName + ', you win!';
    }
    else if ((player === 'rock' && bot === 'paper') || (player === 'paper' && bot === 'scissors') || (player === 'scissors' && bot === 'rock')) {
      $scope.botCount++;
      $scope.message = $scope.playerName + ', you lose.';
    }
    else {
      $scope.message = 'Nobody wins. Try again.';
    }
  };


});
