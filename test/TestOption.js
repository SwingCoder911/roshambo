import Option from '../app/js/classes/Option.jsx';
var assert = require('assert');
describe('Option', function() {
  describe('#Constructor()', function() {
    let option = new Option();
    it('Option constructor creates an option', function() {
      assert(option instanceof Option);
    });
  });
});