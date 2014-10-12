'use strict';

angular.module('PalSzak.Hexwar')
    .controller('MoveController', function($scope, gameService, selectService) {

        $scope.$on('selection-changed', function(event, args) {
            $scope.from = selectService.getSource();
            $scope.to = selectService.getTarget();
            if(angular.isDefined($scope.from) && angular.isDefined($scope.to)) {
                $scope.max = $scope.from.population;
                $scope.percentMax = $scope.from.percentMax;
                if(angular.isDefined( $scope.from[selectService.getNameOfNeighbour()] )){
                    $scope.moveCount = $scope.from[selectService.getNameOfNeighbour()];
                    $scope.max += $scope.moveCount;
                } else {
                    $scope.moveCount = angular.isDefined($scope.from)? $scope.from.population : undefined;
                }

                if(angular.isDefined($scope.from[selectService.getNameOfNeighbour() + '_permanent'])){
                    $scope.movePercent = $scope.from[selectService.getNameOfNeighbour() + '_permanent'];
                    $scope.percentMax += $scope.movePercent;
                } else {
                    $scope.movePercent = undefined;
                }

            } else {
                $scope.moveCount = undefined;
                $scope.movePercent = undefined;
            }

            $scope.usable = angular.isDefined($scope.from) && angular.isDefined($scope.to);

         });

        function calculateChangeDiff(oldValue, newValue) {
            return angular.isDefined(oldValue) ? newValue - oldValue : newValue;
        }

        $scope.move = function(){
            gameService.pushAction({
                from : $scope.from,
                to : $scope.to,
                moveCount : $scope.moveCount,
                permanentMove : $scope.movePercent,
                directionName : selectService.getNameOfNeighbour()
            });

            selectService.deselectAll();
        };
  });
