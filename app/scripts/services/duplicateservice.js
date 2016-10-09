'use strict';

/**
* @ngdoc service
* @name ncrDuplicateFrontApp.duplicateService
* @description
* # duplicateService
* Service in the ncrDuplicateFrontApp.
*/
angular.module('ncrDuplicateFrontApp')
.service('duplicateService', function($http) {
  this.postDuplicate = function (duplicate) {
    var data = {
      duplicate: duplicate
    };
    var config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }
    return $http.post('http://localhost:8443/duplicates', data, config)
  }

  this.getTop5 = function () {
    return $http({
      method: 'GET',
      url: 'http://localhost:8443/duplicates/top5',
    });
  }
});
