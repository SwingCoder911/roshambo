/**
 * This class is the engine of the game that moves it through it's several states.
 * This class "plays the game".
 * This class owns it's states and no one else should know about the states.
 * 
 * TODO: Add best x out of y options
 * TODO: Add number of players
 * TODO: Add more options to pick from
 */
import Player from './Player.jsx';
import Option from './Option.jsx';
import GameSetupDOM from '../components/GameSetupDOM.jsx';
import PickOptionDOM from '../components/PickOptionDOM.jsx';
import DecideWinnerDOM from '../components/DecideWinnerDOM.jsx';

//First state where we pick the mode of player v computer or computer v computer
export const SETUP_STATE = 'setup';
//State where players/computers actually pick options
export const PICK_OPTION_SATE = 'pick-option';
//State where game decides who won out of all the options
export const DECIDE_WINNER_STATE = 'decide-winner';
//State where winner has been decided and the game gets the decision of play again or restart
export const COMPLETE_STATE = 'complete';

export const HUMAN_COMPUTER_MODE = 0;
export const COMPUTER_COMPUTER_MODE = 1;
export const AVAILABLE_MODES = {
    0: 'Human vs Computer',
    1: 'Computer vs Computer'
};

export class Game{
    processChoices(choices){
        this.AvailableChoices = [];        
        choices.forEach((choice) => {
            this.AvailableChoices.push(new Option(choice.Name, choice.Beats));
        });        
    }
    initialize(){
        this.Players = [];
        this.GameState = SETUP_STATE;
        this.GameMode = null;
        this.CurrentDOM = null;
        this.CurrentPlayerKey = null;
        this.AvailableModes = AVAILABLE_MODES;
        this.RenderState();
    }
    constructor(choices){
        if(!choices instanceof Array){
            return;
        }
        this.processChoices(choices);
        this.initialize();
    }    
    RenderState(){
        switch(this.GameState){
            case SETUP_STATE:
                this.CurrentDOM = new GameSetupDOM(this);
                break;
            case PICK_OPTION_SATE:
                this.CurrentDOM = new PickOptionDOM(this);
                break;
            case DECIDE_WINNER_STATE:
                this.CurrentDOM = new DecideWinnerDOM(this);
                break;
            case COMPLETE_STATE:
            default:
        }
    }
    Next(){
        switch(this.GameState){
            case SETUP_STATE:
                this.GameState = PICK_OPTION_SATE;
                this.CurrentPlayerKey = 0;
                break;
            case PICK_OPTION_SATE:                
                if(this.CurrentPlayerKey === (this.Players.length - 1)){
                    this.GameState = DECIDE_WINNER_STATE;
                    this.CurrentPlayerKey = -1;
                }else{
                    this.CurrentPlayerKey++;
                }                                
                break;
            case DECIDE_WINNER_STATE:                
                this.GameState = COMPLETE_STATE;
                break;
            case COMPLETE_STATE:
            default:
        }
        this.RenderState();
    }
    GetWinner(){
        if(this.Players.length > 2){
            console.error("Too many players for this iteration.");
        }
        if(this.Players.length < 2){
            console.error("Not enough players signed up!");
        }
        console.log(this.Players[0].Choice);
        console.log(this.Players[1].Choice);
        if(this.Players[0].Choice.Compare(this.Players[1].Choice)){
            return this.Players[0];
        }else{
            return this.Players[1];
        }
    }
    AddPlayer(player){
        if(!player instanceof Player){
            return;
        }
        this.Players.push(player);
    }
    SetMode(key){
        if(this.AvailableModes[key] === undefined){
            return;
        }        
        this.GameMode = parseInt(key);
        if(this.GameMode === HUMAN_COMPUTER_MODE){
            this.SetHumanComputerMode();
        }else{
            this.SetComputerComputerMode();
        }
    }
    SetPlayerChoice(key){
        this.Players[this.CurrentPlayerKey].SetChoice(this.AvailableChoices[key]);
    }
    SetHumanComputerMode(){
        this.AddPlayer(new Player("Human"));
        this.AddPlayer(new Player("Computer"));
    }
    SetComputerComputerMode(){
        this.AddPlayer(new Player("Computer"));
        this.AddPlayer(new Player("Computer"));
    }
    GetCurrentPlayer(){
        return this.Players[this.CurrentPlayerKey];
    }
    Reset(){
        this.initialize();
    }
}