/**
 * Mini Header view who's job it is to set up the header.
 */
export default class Header{
    constructor(){
        this.Container = document.getElementById("header");
        this.Render();
    }
    Render(){
        let headerDom = document.createElement("h1");
        headerDom.innerText = "Rock Paper Scissors";
        headerDom.className = "header";
        if(this.Container !== null){
            this.Container.appendChild(headerDom);
        }
    }
}