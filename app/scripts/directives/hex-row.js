'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hexrow', function(boardService) {
    return {
        restrict: 'A',
        replace: 'true',
        scope: false,
        compile: function(element, attrs){
          element.addClass('hex-row');
          var columnCount = boardService.getColumnCount();
          for(var c=0; c<columnCount; c++){
            var idx = {r: parseInt(attrs.r), c: c};
            if(c % 2){
              element.append('<hex idx='+angular.toJson(idx)+' class="even"></hex>');
            }else{
              element.append('<hex idx='+angular.toJson(idx)+' ></hex>');
            }
          }
        }
      };
    });
