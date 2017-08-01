import Player from '../app/js/classes/Player.jsx';
var assert = require('assert');
describe('Player', function() {
  describe('#Constructor()', function() {
    let player = new Player();
    it('Player constructor creates a player', function() {
      assert(player instanceof Player);
    });
  });
});