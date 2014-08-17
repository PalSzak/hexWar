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
            $scope.idx = { r: $scope.r, q: $scope.q};
            $scope.population = boardService.getBoard()[$scope.r][$scope.q].population;

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

            $scope.$on('set-a-move', function(event, args) {
                if(angular.equals(args.from, $scope.idx)) {
                    console.log('args',args, $scope.idx);
                    alma(args.to, args.amount);
                }
            });

             function alma(neighbour, amount){
                console.log('in', neighbourName);
                neighbours[($scope.q+1) %2].forEach(function(offset) {
                    if($scope.r === neighbour.r+offset[0]  && $scope.q === neighbour.q + offset[1]){
                        console.log(neighbourName[($scope.q+1) %2][offset[0]+1][offset[1]+1], amount)
                        $scope[neighbourName[($scope.q+1) %2][offset[0]+1][offset[1]+1]] = amount;
                        console.log($scope[neighbourName[($scope.q+1) %2][offset[0]+1][offset[1]+1]]);
                    }
                });
            };
        }
      };
    });
