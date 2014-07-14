'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hexfield', function() {
    return {
        restrict: 'A',
        replace: 'true',
        compile: function(element, attrs){
          element.addClass('hex-row');

        }
      };
    });
