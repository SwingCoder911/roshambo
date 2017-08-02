/**
 * The PickOption view is the view responsible for receiving user's choice of the provided options.
 * This view will be repeated for as many times as there are non computer users available.
 * This view is only responsible for choosing one user's option choice at a time.
 * This view has access to a mini singleton instance "Model" of the Game object
 * 
 * @param model: Game
 */
export default class PickOptionDOM{
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
    PickChoice(key){
        this.Model.SetPlayerChoice(key);
        this.Model.Next();
    }
    Render(){
        let label = this.GetModeLabel();
        let choices = this.GetChoiceOptions();
        let container = this.GetDOMContainer();
        container.appendChild(label);
        container.appendChild(choices);
        this.Container.appendChild(container);
    }
    Bind(){
        let nodeList = this.Container.querySelectorAll('.options-item');
        for(let i = 0, len = nodeList.length; i < len; i++){
            let option = nodeList[i];
            option.addEventListener('click', (event) => {
                this.PickChoice(event.target.getAttribute('key'));
            });
        }
    }
    
    GetDOMContainer(){
        let container = document.createElement('div');
        container.className = 'container game-container pick-option-container';
        return container;
    }
    GetModeLabel(){
        let label = document.createElement('label');
        label.className = 'area-label';
        label.innerText = this.Model.GetCurrentPlayer().Name + '\'s turn to pick!';        
        return label;
    }
    GetChoiceOptions(){
        let optionsDOM = document.createElement('ul');
        optionsDOM.className = 'options-list row';
        let first = true;
        let choices = this.Model.AvailableChoices;
        for(let i = 0, len = choices.length; i < len; i++){
            let choice = choices[i];
            let optionItem = document.createElement('li');
            if(first){
                optionItem.className = 'col-md-2 col-md-offset-2 options-item';
                first = false;
            }else{
                optionItem.className = 'col-md-2 col-md-offset-1 options-item';
            }
            
            optionItem.setAttribute('key', i);
            optionItem.innerText = choice.Name;        
            optionsDOM.appendChild(optionItem);
        }
        return optionsDOM;
    }
}