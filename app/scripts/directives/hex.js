'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hex', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/partials/game/hex.html',
        replace: 'true',
      };
    });
