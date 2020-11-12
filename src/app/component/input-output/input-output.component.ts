import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.css']
})

export class InputOutputComponent{
    infoTxt="";
    iVal="qqq";
    constructor() {}
    
    @Input() titleVal:string;
    @Output() newItemEvent = new EventEmitter<string>();

    addItem(val:string) {
        this.newItemEvent.emit(val);
        this.iVal="";
        console.log(val)
    }
}   