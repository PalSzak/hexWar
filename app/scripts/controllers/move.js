'use strict';

angular.module('PalSzak.Hexwar')
    .controller('MoveController', function($scope, selectService, boardService) {
        $scope.$on('selection-changed', function(event, args) {
            $scope.from = boardService.getField(selectService.getSource());
            $scope.to = boardService.getField(selectService.getTarget());
            console.log('moveCTRL',$scope.from,$scope.to);
            $scope.move_count= angular.isDefined($scope.from)? $scope.from.population : undefined;
        });

        $scope.move = function(){
            console.log('move',$scope.move_count);
            boardService.move(selectService.getSource(),selectService.getTarget(),$scope.move_count);
            selectService.deselectAll();
        }

  });
