/**
 * This test suite is a start to what should be a huge test suite testing all possible inputs in all methods under this object
 */
import {Game, SETUP_STATE, PICK_OPTION_SATE} from '../app/js/classes/Game.jsx';
import Player from '../app/js/classes/Player.jsx';
import Option from '../app/js/classes/Option.jsx';
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
    it('Should go to PICK_OPTION_STATE after initial state of SETUP_STATE', function() {
      let initialState = game.GameState === SETUP_STATE;
      game.Next();
      assert(initialState && game.GameState === PICK_OPTION_SATE);
    });
  });
  describe('#GetWinner()', function() {
    let player1 = new Player('Batman');
    let player2 = new Player('Robin');
    player1.SetChoice(new Option('Rock', ['Scissors']));
    player2.SetChoice(new Option('Scissors', ['Paper']));
    let game = new Game();
    game.AddPlayer(player1);
    game.AddPlayer(player2);
    it('Player who chooses Rock should beat player who chooses Scissors', function() {
      assert(game.GetWinner() === player1);
    });
  });
});