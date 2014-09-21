'use strict';

angular.module('PalSzak.Hexwar')
  .controller('MenuController', function($scope, $location, $modal, ai) {

    $scope.interruptGame = function (){
        if($location.path() === '/game'){
            $modal.open({
                templateUrl: 'views/partials/modal/interrupt.html',
                controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {
                    $scope.ok = function () {
                        $modalInstance.close('close');
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                }],
                size: 'sm'
            });
        }
    };

    $scope.openRules = function (){
        $modal.open({
            templateUrl: 'views/partials/modal/rules.html',
            controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {
                $scope.ok = function () {
                    $modalInstance.close('close');
                };
            }],
            size: 'lg'
        });
    };

    $scope.openAbout = function (){
        $modal.open({
            templateUrl: 'views/partials/modal/about.html',
            controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {
                $scope.ok = function () {
                    $modalInstance.close('close');
                };
            }],
            size: 'lg'
        });
    };

  });
