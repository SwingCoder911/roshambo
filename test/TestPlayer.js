import Player from '../app/js/classes/Player.jsx';
import Option from '../app/js/classes/Option.jsx';
var assert = require('assert');
describe('Player', function() {
  describe('#Constructor()', function() {
    let player = new Player();
    it('Player constructor creates a player', function() {
      assert(player instanceof Player);
    });
  });

  describe('#SetChoice', function(){
    let choice = new Option('Rock', ['Scissors']);
    let player = new Player('Batman');
    it('Player should have option once set and not before', function(){
      let preState = player.Choice === null;
      player.SetChoice(choice);
      assert(preState && player.Choice === choice);
    })
  });
});