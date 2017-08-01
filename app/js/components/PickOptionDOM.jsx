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
        this.Container.querySelectorAll('.options-item').forEach((option) => {
            option.addEventListener('click', (event) => {
                this.PickChoice(event.target.getAttribute('key'));
            });
        });
    }
    
    GetDOMContainer(){
        let container = document.createElement('div');
        container.className = 'setup-container container';
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
        this.Model.AvailableChoices.forEach(function(choice, key){
            let optionItem = document.createElement('li');
            if(first){
                optionItem.className = 'col-md-2 col-md-offset-2 options-item';
                first = false;
            }else{
                optionItem.className = 'col-md-2 col-md-offset-1 options-item';
            }
            
            optionItem.setAttribute('key', key);
            optionItem.innerText = choice.Name;        
            optionsDOM.appendChild(optionItem);
        });
        return optionsDOM;
    }
}