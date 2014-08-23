'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hexrow', function() {
    return {
        restrict: 'A',
        replace: 'true',
        scope: false,
        compile: function(element, attrs){
          element.addClass('hex-row');
          for(var i=0; i<attrs.hexrow; i++){
            if(i % 2){
              element.append('<hex class="even" row="'+attrs.r+'" column="'+i+'" ng-click="select('+attrs.r+','+ i+')"></hex>');
            }else{
              element.append('<hex row="'+attrs.r+'" column="'+i+'" ng-click="select('+attrs.r+','+ i+')"></hex>');
            }
          }
        }
      };
    });
