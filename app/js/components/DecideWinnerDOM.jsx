/**
 * This is the DecideWinner view component. This view object handles all dom concerns and has access to the Game object like a mini singleton field called "Model"
 * 
 * @param model: Game
 *  
 */
export default class DecideWinnerDOM{
    constructor(model){
        this.Model = model;
        this.Container = document.getElementById('root');
        this.Actions = [
            {
                Name: "Reset",
                Class: "btn btn-default",
                Event: () => {
                    this.Model.Reset();
                }
            },
            {
                Name: "Play Again!",
                Class: "btn btn-primary",
                Event: () => {
                    this.Model.Replay();
                }
            }
        ];
        if(!this.Container){
            return;
        }
        this.Container.innerHTML = "";
        this.Render();
        this.Bind();
    }    
    Render(){
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
        container.className = 'container game-container decide-winner-container';
        return container;
    }
    GetPicks(){
        let container = document.createElement('div');
        container.className = "picks-container";
        for(let i = 0, len = this.Model.Players.length; i < len; i++){
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
    GetModeLabel(){
        let label = document.createElement('label');
        label.className = 'area-label';
        label.innerText = 'The winner is...';
        return label;
    }
    GetWinner(){
        let winner = this.Model.GetWinner();
        let winnerDOM = document.createElement('h3');
        winnerDOM.className = 'winner';
        winnerDOM.innerText = !winner ? "it's a Tie!" : winner.Name;
        return winnerDOM;
    }
    GetActions(){
        let container = document.createElement('div');
        container.className = 'actions-container';
        for(let i = 0, len = this.Actions.length; i < len; i++){
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