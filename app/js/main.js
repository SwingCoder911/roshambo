import Header from "./components/Header.jsx";
require("../index.html");
class Main{
    constructor(){
        this.Header = new Header();
    }    
}

window.Roshambo = new Main();