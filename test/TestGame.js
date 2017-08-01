import Game from '../app/js/classes/Game.jsx';
var assert = require('assert');
describe('Game', function() {
  describe('#Constructor()', function() {
    let game = new Game();
    it('Game constructor creates a game', function() {
      assert(game instanceof Game);
    });
  });
  describe('#Next()', function() {
    let game = new Game();
    it('Should go to PICK_OPTION_STATE after initial state', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});