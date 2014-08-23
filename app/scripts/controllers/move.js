'use strict';

angular.module('PalSzak.Hexwar')
    .controller('MoveController', function($scope, selectService) {
        $scope.$on('selection-changed', function(event, args) {
            $scope.from = selectService.getSource();
            $scope.to = selectService.getTarget();
            if(angular.isDefined($scope.from) && angular.isDefined($scope.to)) {
                $scope.max = $scope.from;
                if(angular.isDefined( $scope.from[selectService.getNameOfNeighbour()] )){
                    $scope.moveCount = $scope.from[selectService.getNameOfNeighbour()];
                    $scope.max += $scope.moveCount;
                } else {
                    $scope.moveCount = angular.isDefined($scope.from)? $scope.from.population : undefined;
                } 
            } else {
                $scope.moveCount = undefined;
            }
         });

        $scope.move = function(){
            var moveingDiff = angular.isDefined($scope.from[selectService.getNameOfNeighbour()]) ?
                $scope.moveCount - $scope.from[selectService.getNameOfNeighbour()] : $scope.moveCount;
            $scope.from[selectService.getNameOfNeighbour()] = $scope.moveCount;
            $scope.from.population -= moveingDiff;
            selectService.deselectAll();
        };
  });
