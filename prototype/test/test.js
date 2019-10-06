var assert = require('assert');

var app = require('../js/guild');

describe('Boolean', function() {
  describe('#test1', function() {
    it('check if data is inside database', function() {
        let query = {keys:["1","2","3"]}
        let key = app.validation(query,"cmsc123");
        assert.equal(key, false);
    });
  });
});