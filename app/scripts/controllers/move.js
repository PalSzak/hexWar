'use strict';

angular.module('PalSzak.Hexwar')
    .controller('MoveController', function($scope, gameService, selectService, playerService) {
        $scope.isPlayer = false;

        $scope.$watch(playerService.getPlayer, function(newValue, oldValue, scope) {
            $scope.isPlayer = newValue.type === 'player';
        });


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

         });

        function calculateChangeDiff(oldValue, newValue) {
            return angular.isDefined(oldValue) ? newValue - oldValue : newValue;
        }

        $scope.move = function(){
            $scope.from.population -= calculateChangeDiff($scope.from[selectService.getNameOfNeighbour()], $scope.moveCount);
            $scope.from[selectService.getNameOfNeighbour()] = $scope.moveCount;

            if(angular.isDefined($scope.movePercent)){
                if($scope.movePercent !== 0){
                    $scope.from.percentMax -= calculateChangeDiff( $scope.from[selectService.getNameOfNeighbour() + '_permanent'], $scope.movePercent);
                    $scope.from[selectService.getNameOfNeighbour() + '_permanent'] = $scope.movePercent;
                } else {
                    delete $scope.from[selectService.getNameOfNeighbour() + '_permanent'];
                }
            }

            selectService.deselectAll();
        };

        $scope.turn = function(){
            gameService.nextTurn();
        };
  });
