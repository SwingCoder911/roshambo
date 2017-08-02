/**
 * This Record view object's job is to render the upper space displaying what the win record is for each of the players.
 * This object has access to a singleton instance of the Game object "Model"
 * 
 * @param model: Game
 */
export default class RecordDOM{
    constructor(model){
        this.Container = document.getElementById("record");
        this.Clean();
        this.Model = model;
        this.Render();
    }
    Render(){        
        let first = true;
        let records = this.Model.Record;
        for(let i = 0, len = records.length; i < len; i++){
            let record = records[i];
            let p = document.createElement("p");
            let label = document.createElement("label");
            let score = document.createElement("span");
            if(first){
                p.className = "record-item col-md-2 col-md-offset-3";
                first = false;
            }else{
                p.className = "record-item col-md-2 col-md-offset-2";
            }            
            label.innerText = this.Model.Players[i].Name + " Score: ";
            score.innerText = record;
            p.appendChild(label);
            p.appendChild(score);
            this.Container.appendChild(p);
        }
    }
    Clean(){
        this.Container.innerHTML = "";
    }
}