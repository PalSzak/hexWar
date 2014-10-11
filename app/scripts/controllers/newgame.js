'use strict';

angular.module('PalSzak.Hexwar')
    .controller('NewGameController', function($scope, maps, gameService) {
        $scope.maps = maps;
        $scope.gameModel ={};
        $scope.gameModel.map = maps[0];
        $scope.newGame = function(){
            gameService.startGame($scope.gameModel);
        };
  });
