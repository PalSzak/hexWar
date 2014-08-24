'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hex', function() {
    return {
        restrict: 'E',
        replace: 'true',
        scope: {
            idx: '=idx'
        },
        templateUrl: 'views/partials/game/hex.html',
        controller: function($scope, boardService, selectService, fieldHelper){
            $scope.field = boardService.getField($scope.idx);
            if($scope.field.owner !== 'empty'){
                $scope.select = selectService.setClicked;
                $scope.$on('selection-changed', function(event, args) {
                    if(angular.equals($scope.field, selectService.getTarget())) {
                        $scope.marker = 'neighbour';
                    } else if(angular.equals($scope.field, selectService.getSource())) {
                        $scope.marker = 'active';
                    } else if(angular.isUndefined(selectService.getTarget()) && fieldHelper.getNameOfNeighbour(selectService.getSource() ,$scope.field)){
                        $scope.marker = 'neighbour';
                    } else {
                        $scope.marker = '';
                    }
                });
            }
        }
      };
    });
