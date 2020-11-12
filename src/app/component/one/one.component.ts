import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  infoText="ddd";
  list=[{
    name:"ddd",
    type:false
  },{
    name:"ccc",
    type:false
  },{
    name:"bbb",
    type:false
  }];
  constructor() { }

  ngOnInit(): void {
  }

  onWrite() {
    console.log('----'+this.infoText);
    this.list.push({
      name:this.infoText,
      type:false
    });
    this.infoText="";
  }

  onCheckbox(val,id_) {
    console.log(val)
    this.list[id_].type=val;
  }

  delSingle(index_) {
    this.list.splice(index_,1);
  }

  onDelSelect() {
    let arr2=[];
    for(let i=0;i<this.list.length;i++){
      if(!this.list[i].type){
        arr2.push(this.list[i]);
        console.log(arr2);
      }
    }
    this.list=arr2;
  }

}
