export default class DecideWinnerDOM{
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
    Render(){
        let label = this.GetModeLabel();
        let winner = this.GetWinner();
        let container = this.GetDOMContainer();
        let actions = this.GetActions();
        container.appendChild(label);
        container.appendChild(winner);
        this.Container.appendChild(container);
    }
    Bind(){
        this.Container.querySelectorAll('.options-item').forEach((option) => {
            option.addEventListener('click', (event) => {
                this.ChooseMode(event.target.getAttribute('key'));
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
        label.innerText = 'The winner is...';
        return label;
    }
    GetWinner(){
        let winnerDOM = document.createElement('h3');
        winnerDOM.className = 'winner';
        winnerDOM.innerText = this.Model.GetWinner().Name;
        return winnerDOM;
    }
    GetActions(){
        let container = document.createElement('div');
        container.className = 'actions-container';
        
    }
}