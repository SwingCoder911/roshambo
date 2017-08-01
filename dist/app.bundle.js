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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Player_jsx__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Option_jsx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_GameSetupDOM_jsx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PickOptionDOM_jsx__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DecideWinnerDOM_jsx__ = __webpack_require__(28);
/**
 * This class is the engine of the game that moves it through it's several states.
 * This class "plays the game".
 * This class owns it's states and no one else should know about the states.
 * 
 * TODO: Add best x out of y options
 * TODO: Add number of players
 * TODO: Add more options to pick from
 */






//First state where we pick the mode of player v computer or computer v computer
const SETUP_STATE = 'setup';
/* unused harmony export SETUP_STATE */

//State where players/computers actually pick options
const PICK_OPTION_SATE = 'pick-option';
/* unused harmony export PICK_OPTION_SATE */

//State where game decides who won out of all the options
const DECIDE_WINNER_STATE = 'decide-winner';
/* unused harmony export DECIDE_WINNER_STATE */

//State where winner has been decided and the game gets the decision of play again or restart
const COMPLETE_STATE = 'complete';
/* unused harmony export COMPLETE_STATE */


const HUMAN_COMPUTER_MODE = 0;
/* unused harmony export HUMAN_COMPUTER_MODE */

const COMPUTER_COMPUTER_MODE = 1;
/* unused harmony export COMPUTER_COMPUTER_MODE */

const AVAILABLE_MODES = {
    0: 'Human vs Computer',
    1: 'Computer vs Computer'
};
/* unused harmony export AVAILABLE_MODES */


class Game {
    processChoices(choices) {
        this.AvailableChoices = [];
        choices.forEach(choice => {
            this.AvailableChoices.push(new __WEBPACK_IMPORTED_MODULE_1__Option_jsx__["a" /* default */](choice.Name, choice.Beats));
        });
    }
    initialize() {
        this.Players = [];
        this.GameState = SETUP_STATE;
        this.GameMode = null;
        this.CurrentDOM = null;
        this.CurrentPlayerKey = null;
        this.AvailableModes = AVAILABLE_MODES;
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
                this.CurrentDOM = new __WEBPACK_IMPORTED_MODULE_2__components_GameSetupDOM_jsx__["a" /* default */](this);
                break;
            case PICK_OPTION_SATE:
                this.CurrentDOM = new __WEBPACK_IMPORTED_MODULE_3__components_PickOptionDOM_jsx__["a" /* default */](this);
                break;
            case DECIDE_WINNER_STATE:
                this.CurrentDOM = new __WEBPACK_IMPORTED_MODULE_4__components_DecideWinnerDOM_jsx__["a" /* default */](this);
                break;
            case COMPLETE_STATE:
            default:
        }
    }
    Next() {
        switch (this.GameState) {
            case SETUP_STATE:
                this.GameState = PICK_OPTION_SATE;
                this.CurrentPlayerKey = 0;
                break;
            case PICK_OPTION_SATE:
                if (this.CurrentPlayerKey === this.Players.length - 1) {
                    this.GameState = DECIDE_WINNER_STATE;
                    this.CurrentPlayerKey = -1;
                } else {
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
    GetWinner() {
        if (this.Players.length > 2) {
            console.error("Too many players for this iteration.");
        }
        if (this.Players.length < 2) {
            console.error("Not enough players signed up!");
        }
        console.log(this.Players[0].Choice);
        console.log(this.Players[1].Choice);
        if (this.Players[0].Choice.Compare(this.Players[1].Choice)) {
            return this.Players[0];
        } else {
            return this.Players[1];
        }
    }
    AddPlayer(player) {
        if (!player instanceof __WEBPACK_IMPORTED_MODULE_0__Player_jsx__["a" /* default */]) {
            return;
        }
        this.Players.push(player);
    }
    SetMode(key) {
        if (this.AvailableModes[key] === undefined) {
            return;
        }
        this.GameMode = parseInt(key);
        if (this.GameMode === HUMAN_COMPUTER_MODE) {
            this.SetHumanComputerMode();
        } else {
            this.SetComputerComputerMode();
        }
    }
    SetPlayerChoice(key) {
        this.Players[this.CurrentPlayerKey].SetChoice(this.AvailableChoices[key]);
    }
    SetHumanComputerMode() {
        this.AddPlayer(new __WEBPACK_IMPORTED_MODULE_0__Player_jsx__["a" /* default */]("Human"));
        this.AddPlayer(new __WEBPACK_IMPORTED_MODULE_0__Player_jsx__["a" /* default */]("Computer"));
    }
    SetComputerComputerMode() {
        this.AddPlayer(new __WEBPACK_IMPORTED_MODULE_0__Player_jsx__["a" /* default */]("Computer"));
        this.AddPlayer(new __WEBPACK_IMPORTED_MODULE_0__Player_jsx__["a" /* default */]("Computer"));
    }
    GetCurrentPlayer() {
        return this.Players[this.CurrentPlayerKey];
    }
    Reset() {
        this.initialize();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Option_jsx__ = __webpack_require__(24);

class Player {
    constructor(name) {
        this.Name = name;
        this.Choice = null;
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
class Option {
    constructor(name, beats) {
        this.Name = name;
        this.Beats = [];
        if (beats instanceof Array) {
            this.Beats = beats;
        }
    }
    Compare(option) {
        return this.Beats.indexOf(option.Name) !== -1;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Option;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
        this.Container.querySelectorAll('.options-item').forEach(option => {
            option.addEventListener('click', event => {
                this.ChooseMode(event.target.getAttribute('key'));
            });
        });
    }

    GetDOMContainer() {
        let container = document.createElement('div');
        container.className = 'setup-container container';
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
        this.Container.querySelectorAll('.options-item').forEach(option => {
            option.addEventListener('click', event => {
                this.PickChoice(event.target.getAttribute('key'));
            });
        });
    }

    GetDOMContainer() {
        let container = document.createElement('div');
        container.className = 'setup-container container';
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
        this.Model.AvailableChoices.forEach(function (choice, key) {
            let optionItem = document.createElement('li');
            if (first) {
                optionItem.className = 'col-md-2 col-md-offset-2 options-item';
                first = false;
            } else {
                optionItem.className = 'col-md-2 col-md-offset-1 options-item';
            }

            optionItem.setAttribute('key', key);
            optionItem.innerText = choice.Name;
            optionsDOM.appendChild(optionItem);
        });
        return optionsDOM;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PickOptionDOM;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const AVAILABLE_CHOICES = [{ Name: 'Rock', Beats: ['Scissors'] }, { Name: 'Paper', Beats: ['Rock'] }, { Name: 'Scissors', Beats: ['Paper'] }];
/* harmony export (immutable) */ __webpack_exports__["a"] = AVAILABLE_CHOICES;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DecideWinnerDOM {
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
    Render() {
        let label = this.GetModeLabel();
        let winner = this.GetWinner();
        let container = this.GetDOMContainer();
        let actions = this.GetActions();
        container.appendChild(label);
        container.appendChild(winner);
        this.Container.appendChild(container);
    }
    Bind() {
        this.Container.querySelectorAll('.options-item').forEach(option => {
            option.addEventListener('click', event => {
                this.ChooseMode(event.target.getAttribute('key'));
            });
        });
    }

    GetDOMContainer() {
        let container = document.createElement('div');
        container.className = 'setup-container container';
        return container;
    }
    GetModeLabel() {
        let label = document.createElement('label');
        label.className = 'area-label';
        label.innerText = 'The winner is...';
        return label;
    }
    GetWinner() {
        let winnerDOM = document.createElement('h3');
        winnerDOM.className = 'winner';
        winnerDOM.innerText = this.Model.GetWinner().Name;
        return winnerDOM;
    }
    GetActions() {
        let container = document.createElement('div');
        container.className = 'actions-container';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DecideWinnerDOM;


/***/ })
/******/ ]);