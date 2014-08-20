'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hex', function() {
    return {
        restrict: 'E',
        replace: 'true',
        scope: {
            r: '=row',
            q: '=colum'
        },
        templateUrl: 'views/partials/game/hex.html',
        controller: function($scope, boardService, selectService, neighbours, neighbourName){
            $scope.field = boardService.getBoard()[$scope.r][$scope.q];
            $scope.idx = { r: $scope.r, q: $scope.q};
            if($scope.field.owner === 'empty'){
                $scope.marker = 'empty';
            } else {
                $scope.$on('selection-changed', function(event, args) {
                    if(angular.equals($scope.idx, selectService.getTarget())) {
                        $scope.marker = 'neighbour';
                    } else if(angular.equals($scope.idx, selectService.getSource())) {
                        $scope.marker = 'active';
                    } else if(!angular.isUndefined(selectService.getSource()) && angular.isUndefined(selectService.getTarget()) && selectService.isNeighbours(selectService.getSource() ,$scope.idx) ){
                        $scope.marker = 'neighbour';
                    } else {
                        $scope.marker = '';
                    }
                });
            }
        }
      };
    });
