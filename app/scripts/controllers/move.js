'use strict';

angular.module('PalSzak.Hexwar')
    .controller('MoveController', function($scope, selectService) {
        selectService.registerObserver(function(){
            $scope.from = selectService.getSource();
            $scope.to = selectService.getTarget();
            console.log('moveCTRL',$scope.from,$scope.to);
        })

  });
