import Option from './Option.jsx';
export default class Player{
    constructor(name){
        this.Name = name;
        this.Choice = null;
    }
    SetChoice(choice){
        if(!choice instanceof Option){
            return;
        }
        this.Choice = choice;
    }
}