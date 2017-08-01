import Header from "./components/Header.jsx";
import {Game} from "./classes/Game.jsx";
import {AVAILABLE_CHOICES} from './config.js';
require("../index.html");
class Main{
    constructor(){
        //Just setup the header
        this.Header = new Header();
        //Begin the game!
        this.Instance = new Game(AVAILABLE_CHOICES);
    }    
}

window.Roshambo = new Main();