export default class GameSetupDOM{
    constructor(model){
        this.Model = model;
        this.Container = document.getElementById('root');
        if(!this.Container){
            return;
        }
        this.Container.innerHTML = "";
        this.Render();
        this.Bind();
    }
    ChooseMode(key){
        this.Model.SetMode(key);
        this.Model.Next();
    }
    Render(){
        let label = this.GetModeLabel();
        let options = this.GetModeOptions();
        let container = this.GetDOMContainer();
        container.appendChild(label);
        container.appendChild(options);
        this.Container.appendChild(container);
    }
    Bind(){
        let nodeList = this.Container.querySelectorAll('.options-item');
        for(let i = 0, len = nodeList.length; i < len; i++){
            let option = nodeList[i];
            option.addEventListener('click', (event) => {
                this.ChooseMode(event.target.getAttribute('key'));
            });
        }
    }
    
    GetDOMContainer(){
        let container = document.createElement('div');
        container.className = 'container game-container game-setup-container';
        return container;
    }
    GetModeLabel(){
        let label = document.createElement('label');
        label.className = 'area-label';
        label.innerText = 'Pick a Game Mode!';
        return label;
    }
    GetModeOptions(){
        let optionsDOM = document.createElement('ul');
        optionsDOM.className = 'options-list row';
        let first = true;
        for(var key in this.Model.AvailableModes){
            let optionItem = document.createElement('li');
            if(first){
                optionItem.className = 'col-md-2 col-md-offset-3 options-item';
                first = false;
            }else{
                optionItem.className = 'col-md-2 col-md-offset-2 options-item';
            }
            
            optionItem.setAttribute('key', key);
            optionItem.innerText = this.Model.AvailableModes[key];        
            optionsDOM.appendChild(optionItem);
        }
        return optionsDOM;
    }
}