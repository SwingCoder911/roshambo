class Header{
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

export default Header;