export default class Option{
    constructor(name, beats){
        this.Name = name;
        this.Beats = [];
        if(beats instanceof Array){
            this.Beats = beats;
        }        
    }
    Compare(option){
        return this.Beats.indexOf(option.Name) !== -1;
    }
}