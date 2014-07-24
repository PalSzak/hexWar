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
        controller: function($scope, $timeout, selectService){
            $scope.idx = { r: $scope.r, q: $scope.q};

            $scope.$on('hex-clicked', function(event, args) {
                if(angular.equals($scope.idx, selectService.getTarget())) {
                    $scope.marker = 'neighbour';
                } else if(angular.equals($scope.idx, selectService.getSource())) {
                    $scope.marker = 'active';
                } else if(angular.isUndefined(selectService.getTarget()) && selectService.isNeighbours(selectService.getSource() ,$scope.idx) ){
                    $scope.marker = 'neighbour';
                } else {
                    $scope.marker = '';
                }
            });
        }
      };
    });
