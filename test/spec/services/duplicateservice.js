'use strict';

describe('Service: duplicateService', function () {

  // load the service's module
  beforeEach(module('ncrDuplicateFrontApp'));

  // instantiate service
  var duplicateService;
  beforeEach(inject(function (_duplicateService_) {
    duplicateService = _duplicateService_;
  }));

  it('should do something', function () {
    expect(!!duplicateService).toBe(true);
  });

});
