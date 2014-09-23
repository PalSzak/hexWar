'use strict';

angular.module('PalSzak.Hexwar')
    .controller('NewGameController', function($scope, $location, maps, gameService) {
        $scope.maps = maps;
        $scope.gameModel ={};
        $scope.gameModel.map = maps[0];
        $scope.newGame = function(){
            gameService.initGame($scope.gameModel);
            $location.path('/game');
        };
  });
