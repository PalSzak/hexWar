'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hexfield', function(boardService) {

    return {
        restrict: 'E',
        replace: 'true',
        compile: function(element){

            element.append(
    '<div id="zoom" class="btn-group">'+
        '<label class="btn btn-primary btn-xs" ng-click=\'zoomOut()\'>-</label>'+
        '<label class="btn btn-primary btn-xs" ng-click=\'zoomIn()\'>+</label>'+
    '</div>'
    );



            var rowCount = boardService.getRowCount();
            for(var r = 0; r<rowCount; r++){
                element.append('<div hexrow r="'+r+'"></div>');
            }
        }
      };
    });
