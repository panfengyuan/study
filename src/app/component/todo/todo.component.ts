import { Component, Input } from '@angular/core';

interface TodoArr{
    name:string,
    type:boolean
}

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class TodoComponent {
    
    @Input() adata:TodoArr[] = [];

    selectItem(t,id_) {
        console.log(t)
        this.adata[id_].type=t;
    }

    delSig(id_){
        this.adata.splice(id_,1);
    }

    delSel(){
        for(let i=this.adata.length-1;i>-1;i--){
            if(this.adata[i].type){
                this.adata.splice(i,1);
            }
        }
    }
}