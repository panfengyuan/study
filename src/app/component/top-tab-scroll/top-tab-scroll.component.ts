import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface tepMen{
  title:string,
  type:boolean
}

@Component({
  selector: 'app-top-tab-scroll',
  templateUrl: './top-tab-scroll.component.html',
  styleUrls: ['./top-tab-scroll.component.css']
})

export class TopTabScrollComponent implements OnInit {
  @Input() navData:tepMen[]=[];
  @Input() navActiveColor='red';
  @Input() navColor:string='blue';
  @Output() navSelect = new EventEmitter();

  selectIndex=0;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  clickNav(val) {
    this.selectIndex=val;
    this.navSelect.emit(this.navData[this.selectIndex]);
  }

}
