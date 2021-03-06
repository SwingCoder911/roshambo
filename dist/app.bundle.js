/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_jsx__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Game_jsx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__(27);
/**
 * This is the main driving JS script which gets the page going and begins the Game
 */





//Bringing in the index file
__webpack_require__(20);
class Main {
    constructor() {
        //Just setup the header
        this.Header = new __WEBPACK_IMPORTED_MODULE_0__components_Header_jsx__["a" /* default */]();
        //Begin the game!
        this.Instance = new __WEBPACK_IMPORTED_MODULE_1__classes_Game_jsx__["a" /* Game */](__WEBPACK_IMPORTED_MODULE_2__config_js__["a" /* AVAILABLE_CHOICES */]);
    }
}

window.Roshambo = new Main();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Mini Header view who's job it is to set up the header.
 */
class Header {
    constructor() {
        this.Container = document.getElementById("header");
        this.Render();
    }
    Render() {
        let headerDom = document.createElement("h1");
        headerDom.innerText = "Rock Paper Scissors";
        headerDom.className = "header";
        if (this.Container !== null) {
            this.Container.appendChild(headerDom);
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Player_jsx__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Option_jsx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_GameSetupDOM_jsx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PickOptionDOM_jsx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_DecideWinnerDOM_jsx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_RecordDOM_jsx__ = __webpack_require__(29);
/**
 * This class is the engine of the game that moves it through it's several states.
 * This class "plays the game".
 * This class owns it's states and no one else should know about the states.
 * This class is passed a set of options that each player gets to choose from for extensibility.
 * 
 * @param choices: Choice[]
 * 
 * TODO: Add best x out of y options
 * TODO: Add number of players
 * TODO: Add more options to pick from
 */




//Import DOM Components





//First state where we pick the mode of player v computer or computer v computer
const SETUP_STATE = 'setup';
/* unused harmony export SETUP_STATE */

//State where players/computers actually pick options
const PICK_OPTION_SATE = 'pick-option';
/* unused harmony export PICK_OPTION_SATE */

//State where game decides who won out of all the options and the game gets the decision of play again or restart
const DECIDE_WINNER_STATE = 'decide-winner';
/* unused harmony export DECIDE_WINNER_STATE */


class Game {
    processChoices(choices) {
        this.AvailableChoices = [];
        for (let i = 0, len = choices.length; i < len; i++) {
            let choice = choices[i];
            this.AvailableChoices.push(new __WEBPACK_IMPORTED_MODULE_2__Option_jsx__["a" /* default */](choice.Name, choice.Beats));
        }
    }
    initialize() {
        this.Players = [];
        this.Record = [];
        this.GameState = SETUP_STATE;
        this.GameMode = null;
        this.CurrentDOM = null;
        this.CurrentPlayerKey = null;
        this.AvailableModes = __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* AVAILABLE_MODES */];
        this.RenderState();
    }
    constructor(choices) {
        if (!choices instanceof Array) {
            return;
        }
        this.processChoices(choices);
        this.initialize();
    }
    RenderState() {
        switch (this.GameState) {
            case SETUP_STATE:
                this.CurrentDOM = new __WEBPACK_IMPORTED_MODULE_3__components_GameSetupDOM_jsx__["a" /* default */](this);
                break;
            case PICK_OPTION_SATE:
                this.CurrentDOM = new __WEBPACK_IMPORTED_MODULE_4__components_PickOptionDOM_jsx__["a" /* default */](this);
                this.RecordDOM = new __WEBPACK_IMPORTED_MODULE_6__components_RecordDOM_jsx__["a" /* default */](this);
                break;
            case DECIDE_WINNER_STATE:
                this.CurrentDOM = new __WEBPACK_IMPORTED_MODULE_5__components_DecideWinnerDOM_jsx__["a" /* default */](this);
                this.RecordDOM = new __WEBPACK_IMPORTED_MODULE_6__components_RecordDOM_jsx__["a" /* default */](this);
                break;
            default:
        }
    }
    Next() {
        switch (this.GameState) {
            case SETUP_STATE:
                this.GameState = PICK_OPTION_SATE;
                this.CurrentPlayerKey = 0;
                this.CheckForGeneratedPlayer();
                break;
            case PICK_OPTION_SATE:
                if (this.CurrentPlayerKey === this.Players.length - 1) {
                    this.GameState = DECIDE_WINNER_STATE;
                    this.CurrentPlayerKey = -1;
                } else {
                    this.CurrentPlayerKey++;
                }
                this.CheckForGeneratedPlayer();
                break;
            default:
        }
        this.RenderState();
        let currentPlayer = this.GetCurrentPlayer();
        if (currentPlayer instanceof __WEBPACK_IMPORTED_MODULE_1__Player_jsx__["a" /* default */] && currentPlayer.IsComputer) {
            this.Next();
        }
    }
    CheckForGeneratedPlayer() {
        let currentPlayer = this.GetCurrentPlayer();
        if (currentPlayer instanceof __WEBPACK_IMPORTED_MODULE_1__Player_jsx__["a" /* default */] && currentPlayer.IsComputer) {
            this.GenerateRandomPlayerChoice();
        }
    }
    GetWinner() {
        if (this.Players.length > 2) {
            console.error("Too many players for this iteration.");
        }
        if (this.Players.length < 2) {
            console.error("Not enough players signed up!");
        }
        if (this.Players[0].Choice.Compare(this.Players[1].Choice)) {
            this.Record[0]++;
            return this.Players[0];
        } else if (this.Players[1].Choice.Compare(this.Players[0].Choice)) {
            this.Record[1]++;
            return this.Players[1];
        }
        return null;
    }
    Replay() {
        this.GameState = SETUP_STATE;
        this.Next();
    }
    AddPlayer(player) {
        if (!player instanceof __WEBPACK_IMPORTED_MODULE_1__Player_jsx__["a" /* default */]) {
            return;
        }
        this.Players.push(player);
        this.Record.push(0);
    }
    SetMode(key) {
        if (this.AvailableModes[key] === undefined) {
            return;
        }
        this.GameMode = parseInt(key);
        if (this.GameMode === __WEBPACK_IMPORTED_MODULE_0__config_js__["c" /* HUMAN_COMPUTER_MODE */]) {
            this.SetHumanComputerMode();
        } else {
            this.SetComputerComputerMode();
        }
    }
    GenerateRandomPlayerChoice() {
        let choice = Math.floor(Math.random() * this.AvailableChoices.length);
        this.SetPlayerChoice(choice);
    }
    SetPlayerChoice(key) {
        this.Players[this.CurrentPlayerKey].SetChoice(this.AvailableChoices[key]);
    }
    SetHumanComputerMode() {
        this.AddPlayer(new __WEBPACK_IMPORTED_MODULE_1__Player_jsx__["a" /* default */]("Human"));
        this.AddPlayer(new __WEBPACK_IMPORTED_MODULE_1__Player_jsx__["a" /* default */]("Computer"));
    }
    SetComputerComputerMode() {
        this.AddPlayer(new __WEBPACK_IMPORTED_MODULE_1__Player_jsx__["a" /* default */]("Computer"));
        this.AddPlayer(new __WEBPACK_IMPORTED_MODULE_1__Player_jsx__["a" /* default */]("Computer"));
    }
    GetCurrentPlayer() {
        if (this.CurrentPlayerKey >= this.Players.length) {
            return null;
        }
        return this.Players[this.CurrentPlayerKey];
    }
    Reset() {
        this.initialize();
        this.RecordDOM.Clean();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Option_jsx__ = __webpack_require__(24);
/**
 * This object is the actual player that holds the choice and has a name
 * All it can do is set it's choice. It doesn't know whether it beats another player.
 * 
 * @param name: string
 * 
 * TODO: Let the player pick a name other than "Human"
 */

const COMPUTER_KEY = 'computer';
class Player {
    constructor(name) {
        this.Name = name;
        this.Choice = null;
        this.IsComputer = this.Name.toLowerCase() === COMPUTER_KEY;
    }
    SetChoice(choice) {
        if (!choice instanceof __WEBPACK_IMPORTED_MODULE_0__Option_jsx__["a" /* default */]) {
            return;
        }
        this.Choice = choice;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This class is the option class that is meant to handle the choices: Rock, Paper, Scissors, etc.
 * The only thing this has and/or knows is it's name and what it beats.
 * If an option is not listed in it's list of things it beats, it loses to that option.
 * 
 * @param name: string 
 * @param beats: string[]
 */
class Option {
    constructor(name, beats) {
        this.Name = name;
        this.Beats = [];
        if (beats instanceof Array) {
            this.Beats = beats;
        }
    }
    Compare(option) {
        //Always beat something that's not at least an Option!
        if (!option instanceof Option) {
            return true;
        }
        return this.Beats.indexOf(option.Name) !== -1;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Option;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The GameSetup view is the view that starts us off, allowing the player to pick between Human vs Computer or Computer vs Computer modes.
 * This object's only concern is the dom and has access to a "Model" field that's a mini singleton instance of the Game object
 * 
 * @param model: Game
 */
class GameSetupDOM {
    constructor(model) {
        this.Model = model;
        this.Container = document.getElementById('root');
        if (!this.Container) {
            return;
        }
        this.Container.innerHTML = "";
        this.Render();
        this.Bind();
    }
    ChooseMode(key) {
        this.Model.SetMode(key);
        this.Model.Next();
    }
    Render() {
        let label = this.GetModeLabel();
        let options = this.GetModeOptions();
        let container = this.GetDOMContainer();
        container.appendChild(label);
        container.appendChild(options);
        this.Container.appendChild(container);
    }
    Bind() {
        let nodeList = this.Container.querySelectorAll('.options-item');
        for (let i = 0, len = nodeList.length; i < len; i++) {
            let option = nodeList[i];
            option.addEventListener('click', event => {
                this.ChooseMode(event.target.getAttribute('key'));
            });
        }
    }

    GetDOMContainer() {
        let container = document.createElement('div');
        container.className = 'container game-container game-setup-container';
        return container;
    }
    GetModeLabel() {
        let label = document.createElement('label');
        label.className = 'area-label';
        label.innerText = 'Pick a Game Mode!';
        return label;
    }
    GetModeOptions() {
        let optionsDOM = document.createElement('ul');
        optionsDOM.className = 'options-list row';
        let first = true;
        for (var key in this.Model.AvailableModes) {
            let optionItem = document.createElement('li');
            if (first) {
                optionItem.className = 'col-md-2 col-md-offset-3 options-item';
                first = false;
            } else {
                optionItem.className = 'col-md-2 col-md-offset-2 options-item';
            }

            optionItem.setAttribute('key', key);
            optionItem.innerText = this.Model.AvailableModes[key];
            optionsDOM.appendChild(optionItem);
        }
        return optionsDOM;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameSetupDOM;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The PickOption view is the view responsible for receiving user's choice of the provided options.
 * This view will be repeated for as many times as there are non computer users available.
 * This view is only responsible for choosing one user's option choice at a time.
 * This view has access to a mini singleton instance "Model" of the Game object
 * 
 * @param model: Game
 */
class PickOptionDOM {
    constructor(model) {
        this.Model = model;
        this.Container = document.getElementById('root');
        if (!this.Container) {
            return;
        }
        this.Container.innerHTML = "";
        this.Render();
        this.Bind();
    }
    PickChoice(key) {
        this.Model.SetPlayerChoice(key);
        this.Model.Next();
    }
    Render() {
        let label = this.GetModeLabel();
        let choices = this.GetChoiceOptions();
        let container = this.GetDOMContainer();
        container.appendChild(label);
        container.appendChild(choices);
        this.Container.appendChild(container);
    }
    Bind() {
        let nodeList = this.Container.querySelectorAll('.options-item');
        for (let i = 0, len = nodeList.length; i < len; i++) {
            let option = nodeList[i];
            option.addEventListener('click', event => {
                this.PickChoice(event.target.getAttribute('key'));
            });
        }
    }

    GetDOMContainer() {
        let container = document.createElement('div');
        container.className = 'container game-container pick-option-container';
        return container;
    }
    GetModeLabel() {
        let label = document.createElement('label');
        label.className = 'area-label';
        label.innerText = this.Model.GetCurrentPlayer().Name + '\'s turn to pick!';
        return label;
    }
    GetChoiceOptions() {
        let optionsDOM = document.createElement('ul');
        optionsDOM.className = 'options-list row';
        let first = true;
        let choices = this.Model.AvailableChoices;
        for (let i = 0, len = choices.length; i < len; i++) {
            let choice = choices[i];
            let optionItem = document.createElement('li');
            if (first) {
                optionItem.className = 'col-md-2 col-md-offset-2 options-item';
                first = false;
            } else {
                optionItem.className = 'col-md-2 col-md-offset-1 options-item';
            }

            optionItem.setAttribute('key', i);
            optionItem.innerText = choice.Name;
            optionsDOM.appendChild(optionItem);
        }
        return optionsDOM;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PickOptionDOM;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This is the config document where all configurable fields go
 */
const AVAILABLE_CHOICES = [{ Name: 'Rock', Beats: ['Scissors'] }, { Name: 'Paper', Beats: ['Rock'] }, { Name: 'Scissors', Beats: ['Paper'] }];
/* harmony export (immutable) */ __webpack_exports__["a"] = AVAILABLE_CHOICES;

const HUMAN_COMPUTER_MODE = 0;
/* harmony export (immutable) */ __webpack_exports__["c"] = HUMAN_COMPUTER_MODE;

const COMPUTER_COMPUTER_MODE = 1;
/* unused harmony export COMPUTER_COMPUTER_MODE */

const AVAILABLE_MODES = {
    0: 'Human vs Computer',
    1: 'Computer vs Computer'
};
/* harmony export (immutable) */ __webpack_exports__["b"] = AVAILABLE_MODES;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This is the DecideWinner view component. This view object handles all dom concerns and has access to the Game object like a mini singleton field called "Model"
 * 
 * @param model: Game
 *  
 */
class DecideWinnerDOM {
    constructor(model) {
        this.Model = model;
        this.Container = document.getElementById('root');
        this.Actions = [{
            Name: "Reset",
            Class: "btn btn-default",
            Event: () => {
                this.Model.Reset();
            }
        }, {
            Name: "Play Again!",
            Class: "btn btn-primary",
            Event: () => {
                this.Model.Replay();
            }
        }];
        if (!this.Container) {
            return;
        }
        this.Container.innerHTML = "";
        this.Render();
        this.Bind();
    }
    Render() {
        let picks = this.GetPicks();
        let label = this.GetModeLabel();
        let winner = this.GetWinner();
        let container = this.GetDOMContainer();
        let actions = this.GetActions();
        container.appendChild(picks);
        container.appendChild(label);
        container.appendChild(winner);
        container.appendChild(actions);
        this.Container.appendChild(container);
    }
    Bind() {
        let nodeList = this.Container.querySelectorAll('.options-item');
        for (let i = 0, len = nodeList.length; i < len; i++) {
            let option = nodeList[i];
            option.addEventListener('click', event => {
                this.ChooseMode(event.target.getAttribute('key'));
            });
        }
    }

    GetDOMContainer() {
        let container = document.createElement('div');
        container.className = 'container game-container decide-winner-container';
        return container;
    }
    GetPicks() {
        let container = document.createElement('div');
        container.className = "picks-container";
        for (let i = 0, len = this.Model.Players.length; i < len; i++) {
            let player = this.Model.Players[i];
            let p = document.createElement('p');
            let label = document.createElement('label');
            let span = document.createElement('span');
            p.className = 'pick';
            label.innerText = player.Name + "'s pick: ";
            span.innerText = player.Choice.Name;
            p.appendChild(label);
            p.appendChild(span);
            container.appendChild(p);
        }
        return container;
    }
    GetModeLabel() {
        let label = document.createElement('label');
        label.className = 'area-label';
        label.innerText = 'The winner is...';
        return label;
    }
    GetWinner() {
        let winner = this.Model.GetWinner();
        let winnerDOM = document.createElement('h3');
        winnerDOM.className = 'winner';
        winnerDOM.innerText = !winner ? "it's a Tie!" : winner.Name;
        return winnerDOM;
    }
    GetActions() {
        let container = document.createElement('div');
        container.className = 'actions-container';
        for (let i = 0, len = this.Actions.length; i < len; i++) {
            let action = this.Actions[i];
            let button = document.createElement('button');
            button.onclick = action.Event;
            button.className = action.Class;
            button.innerText = action.Name;
            container.appendChild(button);
        }
        return container;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DecideWinnerDOM;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This Record view object's job is to render the upper space displaying what the win record is for each of the players.
 * This object has access to a singleton instance of the Game object "Model"
 * 
 * @param model: Game
 */
class RecordDOM {
    constructor(model) {
        this.Container = document.getElementById("record");
        this.Clean();
        this.Model = model;
        this.Render();
    }
    Render() {
        let first = true;
        let records = this.Model.Record;
        for (let i = 0, len = records.length; i < len; i++) {
            let record = records[i];
            let p = document.createElement("p");
            let label = document.createElement("label");
            let score = document.createElement("span");
            if (first) {
                p.className = "record-item col-md-2 col-md-offset-3";
                first = false;
            } else {
                p.className = "record-item col-md-2 col-md-offset-2";
            }
            label.innerText = this.Model.Players[i].Name + " Score: ";
            score.innerText = record;
            p.appendChild(label);
            p.appendChild(score);
            this.Container.appendChild(p);
        }
    }
    Clean() {
        this.Container.innerHTML = "";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RecordDOM;


/***/ })
/******/ ]);