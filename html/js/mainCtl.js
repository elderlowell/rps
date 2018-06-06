angular.module('rpsApp').controller('mainCtl', function($scope, $state) {

  $scope.playerName;
  $scope.setNameAndPlay = function(name) {
    $state.go('play', {name: name});
  };

});
