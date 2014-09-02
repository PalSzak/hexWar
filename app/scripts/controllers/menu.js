'use strict';

angular.module('PalSzak.Hexwar')
  .controller('MenuController', function($scope, $location, $modal) {

    $scope.interruptGame = function (){
        if($location.path() === '/game'){
            $modal.open({
                templateUrl: 'views/partials/modal/interrupt.html',
                controller: function ($scope, $modalInstance) {
                    $scope.ok = function () {
                        $modalInstance.close('close');
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                size: 'sm'
            });
        }
    };

    $scope.openRules = function (){
        $modal.open({
            templateUrl: 'views/partials/modal/rules.html',
            controller: function ($scope, $modalInstance) {
                $scope.ok = function () {
                    $modalInstance.close('close');
                };
            },
            size: 'lg'
        });
    };

    $scope.openAbout = function (){
        $modal.open({
            templateUrl: 'views/partials/modal/rules.html',
            controller: function ($scope, $modalInstance) {
                $scope.ok = function () {
                    $modalInstance.close('close');
                };
            },
            size: 'lg'
        });
    };

  });
