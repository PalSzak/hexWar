'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hexfield', function(boardService) {

    return {
        scope: true,
        restrict: 'E',
        replace: 'true',
        compile: function(element){
            var rowCount = boardService.getRowCount();
            for(var r = 0; r<rowCount; r++){
                element.append('<div hexrow r="'+r+'"></div>');
            }
        }
      };
    });
