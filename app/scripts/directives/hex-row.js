'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hexrow', function() {
    return {
        restrict: 'A',
        replace: 'true',
        compile: function(element, attrs){
          element.addClass('hex-row');
          for(var i=0; i<attrs.hexrow; i++){
            if(i % 2){
              element.append('<hex class="even"/>');
            }else{
              element.append('<hex/>');
            }
          }
        }
      };
    });
