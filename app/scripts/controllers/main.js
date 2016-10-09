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
  };

  $scope.top5 = null;
  duplicateService.getTop5().then(function (top5) {
    $scope.top5 = top5.data;
    console.log('top5', $scope.top5);
  });

});
