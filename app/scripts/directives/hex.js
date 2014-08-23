'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hex', function() {
    return {
        restrict: 'E',
        replace: 'true',
        scope: {
            r: '=row',
            c: '=column'
        },
        templateUrl: 'views/partials/game/hex.html',
        controller: function($scope, boardService, selectService){
            $scope.field = boardService.getField({r:$scope.r, c:$scope.c});
            if($scope.field.owner === 'empty'){
                $scope.marker = 'empty';
            } else {
                $scope.$on('selection-changed', function(event, args) {
                    if(angular.equals($scope.field, selectService.getTarget())) {
                        $scope.marker = 'neighbour';
                    } else if(angular.equals($scope.field, selectService.getSource())) {
                        $scope.marker = 'active';
                    } else if(angular.isUndefined(selectService.getTarget()) && boardService.getNameOfNeighbour(selectService.getSource() ,$scope.field)){
                        $scope.marker = 'neighbour';
                    } else {
                        $scope.marker = '';
                    }
                });
            }
        }
      };
    });
