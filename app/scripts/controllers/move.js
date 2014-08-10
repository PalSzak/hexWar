'use strict';

angular.module('PalSzak.Hexwar')
    .controller('MoveController', function($scope, selectService, boardService) {
        $scope.$on('hex-clicked', function(event, args) {
            $scope.from = boardService.getField(selectService.getSource());
            $scope.to = boardService.getField(selectService.getTarget());
            console.log('moveCTRL',$scope.from,$scope.to);
        });

        $scope.move = function(){
            selectService.deselectAll();
        }

  });
