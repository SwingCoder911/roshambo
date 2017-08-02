export default class RecordDOM{
    constructor(model){
        this.Container = document.getElementById("record");
        this.Container.innerHTML = "";
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
}