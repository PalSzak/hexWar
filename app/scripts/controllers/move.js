'use strict';

angular.module('PalSzak.Hexwar')
    .controller('MoveController', function($scope, selectService, boardService) {
        $scope.$on('selection-changed', function(event, args) {
            $scope.from = boardService.getField(selectService.getSource());
            $scope.to = boardService.getField(selectService.getTarget());
            if(angular.isDefined($scope.from) && angular.isDefined($scope.to)) {
                $scope.max = $scope.from;
                if(angular.isDefined( $scope.from[boardService.getNameOfNeighbour(selectService.getSource(), selectService.getTarget())] )){
                    $scope.moveCount = $scope.from[boardService.getNameOfNeighbour(selectService.getSource(), selectService.getTarget())];
                    $scope.max += $scope.moveCount;
                } else {
                    $scope.moveCount = angular.isDefined($scope.from)? $scope.from.population : undefined;
                } 
            } else {
                $scope.moveCount = undefined;
            }
         });

        $scope.move = function(){
            console.log('move',$scope.moveCount);
            boardService.move(selectService.getSource(),selectService.getTarget(),$scope.moveCount);
            selectService.deselectAll();
        };
  });
