'use strict';

/**
* @ngdoc function
* @name ncrDuplicateFrontApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the ncrDuplicateFrontApp
*/
angular.module('ncrDuplicateFrontApp')
.controller('MainCtrl', function ($scope, duplicateService) {
  $scope.sendDuplicate = function () {
    var duplicate = $scope.duplicate;
    duplicateService.postDuplicate(duplicate).then(function (response) {
      console.log('response', response);
    });
    $scope.duplicate = null;
  };

  $scope.top5 = null;
  duplicateService.getTop5().then(function (top5) {
    $scope.top5 = top5.data;
    console.log('top5', $scope.top5);
  });

  $scope.duplicates = null;
  $scope.nonDuplicates = null;

  duplicateService.getCount(0).then(function (nonDuplicateCounter) {
    $scope.nonDuplicates = nonDuplicateCounter.data
    console.log('nonDuplicates', $scope.nonDuplicates);
  });

  duplicateService.getCount(1).then(function (duplicateCounter) {
    $scope.duplicates = duplicateCounter.data
    console.log('duplicates', $scope.duplicates);
  });

  $scope.invalidInputs = null;
  duplicateService.getInvalidInputs().then(function (invalidInputs) {
    $scope.invalidInputs = invalidInputs.data;
    console.log('invalidInputs', $scope.invalidInputs);
  });

});
