'use strict';

/**
 * @ngdoc overview
 * @name ncrDuplicateFrontApp
 * @description
 * # ncrDuplicateFrontApp
 *
 * Main module of the application.
 */
angular
  .module('ncrDuplicateFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/top5', {
        templateUrl: 'views/top5.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
