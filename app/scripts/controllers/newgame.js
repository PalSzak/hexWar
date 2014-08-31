'use strict';

angular.module('PalSzak.Hexwar')
    .controller('NewGameController', function($scope, maps, boardService, playerService) {
        $scope.maps = maps;
        $scope.gamemodel ={};
        $scope.gamemodel.map = maps[0];
        $scope.newGame = function(){
            playerService.initGame($scope.gamemodel);
            boardService.initGame($scope.gamemodel);
        };
  });
