'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hexfield', function(boardService) {


    return {
        scope: true,
        restrict: 'E',
        replace: 'true',
        controller: function($scope, selectService){
             $scope.select=function(r, q){
                selectService.setClicked({r:r, q:q});
            };
        },
        compile: function(element, attrs){
            angular.forEach(boardService.getBoard(), function(row, idx) {
                element.append('<div hexrow="' + Object.keys(row).length + '" r="'+idx+'"/>');
            });

        }
      };
    });
