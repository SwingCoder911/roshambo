/**
 * This object is the actual player that holds the choice and has a name
 * All it can do is set it's choice. It doesn't know whether it beats another player.
 * 
 * @param name: string
 * 
 * TODO: Let the player pick a name other than "Human"
 */
import Option from './Option.jsx';
const COMPUTER_KEY = 'computer';
export default class Player{
    constructor(name){
        this.Name = name;
        this.Choice = null;
        this.IsComputer = this.Name.toLowerCase() === COMPUTER_KEY;
    }
    SetChoice(choice){
        if(!choice instanceof Option){
            return;
        }
        this.Choice = choice;
    }
}