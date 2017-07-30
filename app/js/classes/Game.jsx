/**
 * This class is the engine of the game that moves it through it's several states.
 * This class "plays the game".
 * This class owns it's states and no one else should know about the states.
 * 
 * TODO: Add best x out of y options
 * TODO: Add number of players
 * TODO: Add more options to pick from
 */
import GameSetupDOM from '../components/GameSetupDOM.jsx'

//First state where we pick the mode of player v computer or computer v computer
const SETUP_STATE = 'setup';
//State where players/computers actually pick options
const PICK_OPTION_SATE = 'pick-option';
//State where game decides who won out of all the options
const DECIDE_WINNER_STATE = 'decide-winner';
//State where winner has been decided and the game gets the decision of play again or restart
const COMPLETE_STATE = 'complete';

export class Game{
    constructor(){
        this.GameState = SET_MODE_STATE;
    }
}