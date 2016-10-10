'use strict';

/**
* @ngdoc function
* @name ncrDuplicateFrontApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the ncrDuplicateFrontApp
*/
angular.module('ncrDuplicateFrontApp')
.controller('MainCtrl', function ($scope, duplicateService,ngToast) {
  $scope.sendDuplicate = function () {

    var duplicate = $scope.duplicate;
    duplicateService.postDuplicate(duplicate).then(function (response) {
      duplicate = response.data
      if (duplicate.quantity > 1) {
        ngToast.create(duplicate.duplicate + 'its a duplicate input...');
      }else {
        ngToast.create({
          className: 'warning',
          content: '<a href="#" class="">not duplicate</a>'
        });
      }
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
