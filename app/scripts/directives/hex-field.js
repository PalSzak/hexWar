'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hexfield', function(boardService) {


    return {
        scope: true,
        restrict: 'E',
        replace: 'true',
        controller: function($scope, selectService){
             $scope.select=function(r, c){
                selectService.setClicked({r:r, c:c});
            };
        },
        compile: function(element, attrs){
            angular.forEach(boardService.getBoard(), function(row, idx) {
                element.append('<div hexrow="' + Object.keys(row).length + '" r="'+idx+'"/>');
            });

        }
      };
    });
