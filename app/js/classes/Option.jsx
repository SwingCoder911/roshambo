/**
 * This class is the option class that is meant to handle the choices: Rock, Paper, Scissors, etc.
 * The only thing this has and/or knows is it's name and what it beats.
 * If an option is not listed in it's list of things it beats, it loses to that option.
 * 
 * @param name: string 
 * @param beats: string[]
 */
export default class Option{
    constructor(name, beats){
        this.Name = name;
        this.Beats = [];
        if(beats instanceof Array){
            this.Beats = beats;
        }        
    }
    Compare(option){
        //Always beat something that's not at least an Option!
        if(!option instanceof Option){
            return true;
        }
        return this.Beats.indexOf(option.Name) !== -1;
    }
}