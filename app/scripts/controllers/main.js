'use strict';

/**
* @ngdoc function
* @name ncrDuplicateFrontApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the ncrDuplicateFrontApp
*/
angular.module('ncrDuplicateFrontApp')
.controller('MainCtrl', function ($scope, $http) {
  $scope.SendData = function () {
    console.log('duplicate', $scope.duplicate);
    // use $.param jQuery function to serialize data from JSON
    var data = {
      duplicate: $scope.duplicate
    };

    var config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }
    $http.post('http://localhost:8443/duplicates', data, config)
    .success(function (data, status, headers, config) {
      $scope.PostDataResponse = data;
    })
    .error(function (data, status, header, config) {
      $scope.ResponseDetails = "Data: " + data +
      "<hr />status: " + status +
      "<hr />headers: " + header +
      "<hr />config: " + config;
    });
  };
});
