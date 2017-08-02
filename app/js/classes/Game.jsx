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
import RecordDOM from '../components/RecordDOM.jsx';

//First state where we pick the mode of player v computer or computer v computer
export const SETUP_STATE = 'setup';
//State where players/computers actually pick options
export const PICK_OPTION_SATE = 'pick-option';
//State where game decides who won out of all the options and the game gets the decision of play again or restart
export const DECIDE_WINNER_STATE = 'decide-winner';

export const HUMAN_COMPUTER_MODE = 0;
export const COMPUTER_COMPUTER_MODE = 1;
export const AVAILABLE_MODES = {
    0: 'Human vs Computer',
    1: 'Computer vs Computer'
};

export class Game{
    processChoices(choices){
        this.AvailableChoices = [];        
        for(let i = 0, len = choices.length; i < len; i++){
            let choice = choices[i];
            this.AvailableChoices.push(new Option(choice.Name, choice.Beats));
        }
    }
    initialize(){
        this.Players = [];
        this.Record = [];
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
                this.RecordDOM = new RecordDOM(this);
                break;
            case DECIDE_WINNER_STATE:
                this.CurrentDOM = new DecideWinnerDOM(this);
                this.RecordDOM = new RecordDOM(this);
                break;            
            default:
        }
    }
    Next(){
        switch(this.GameState){
            case SETUP_STATE:
                this.GameState = PICK_OPTION_SATE;
                this.CurrentPlayerKey = 0;
                this.CheckForGeneratedPlayer();
                break;
            case PICK_OPTION_SATE:       
                if(this.CurrentPlayerKey === (this.Players.length - 1)){
                    this.GameState = DECIDE_WINNER_STATE;
                    this.CurrentPlayerKey = -1;
                }else{
                    this.CurrentPlayerKey++;
                }       
                this.CheckForGeneratedPlayer();
                break;
            case DECIDE_WINNER_STATE:                
                //this.GameState = COMPLETE_STATE;
                break;
            default:
        }
        this.RenderState();
        let currentPlayer = this.GetCurrentPlayer();
        if(currentPlayer instanceof Player && currentPlayer.IsComputer){
            this.Next();
        }
    }
    CheckForGeneratedPlayer(){
        let currentPlayer = this.GetCurrentPlayer();
        if(currentPlayer instanceof Player && currentPlayer.IsComputer){
            this.GenerateRandomPlayerChoice();                    
        }
    }
    GetWinner(){
        if(this.Players.length > 2){
            console.error("Too many players for this iteration.");
        }
        if(this.Players.length < 2){
            console.error("Not enough players signed up!");
        }
        if(this.Players[0].Choice.Compare(this.Players[1].Choice)){
            this.Record[0]++;
            return this.Players[0];
        }else if(this.Players[1].Choice.Compare(this.Players[0].Choice)){
            this.Record[1]++;
            return this.Players[1];
        }
        return null;
    }
    Replay(){        
        this.GameState = SETUP_STATE;
        this.Next();
    }
    AddPlayer(player){
        if(!player instanceof Player){
            return;
        }
        this.Players.push(player);
        this.Record.push(0);
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
    GenerateRandomPlayerChoice(){
        let choice = Math.floor(Math.random() * (this.AvailableChoices.length));
        this.SetPlayerChoice(choice);
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
        if(this.CurrentPlayerKey >= this.Players.length){
            return null;
        }
        return this.Players[this.CurrentPlayerKey];
    }
    Reset(){
        this.initialize();
    }
}