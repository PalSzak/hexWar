'use strict';

angular.module('PalSzak.Hexwar', ['ngAnimate', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch'])

  .constant('version', 'v0.1.0')

  .config(function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

