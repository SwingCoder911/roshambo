import Option from '../app/js/classes/Option.jsx';
var assert = require('assert');
describe('Option', function() {
  describe('#Constructor()', function() {
    let option = new Option();
    it('Option constructor creates an option', function() {
      assert(option instanceof Option);
    });
  });
  describe('#Compare', function(){
    let rockOption = new Option("Rock", ["Scissors"]);
    let scissorOption = new Option("Scissors", ["Paper"]);
    it('Rock should beat Scissors', function(){
      assert.equal(rockOption.Compare(scissorOption), true);
    });
  })
});