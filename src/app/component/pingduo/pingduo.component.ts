import { Component, OnInit } from '@angular/core';

import { TopTabScrollComponent } from '../top-tab-scroll/top-tab-scroll.component';

@Component({
  selector: 'app-pingduo',
  templateUrl: './pingduo.component.html',
  styleUrls: ['./pingduo.component.css']
})
export class PingduoComponent implements OnInit {
  topNavData=[
    {
      title:'女装',
      type:false
    },{
      title:'男装',
      type:false
    },{
      title:'女鞋',
      type:false
    },{
      title:'童装',
      type:false
    },{
      title:'男鞋',
      type:false
    },{
      title:'美妆',
      type:false
    },{
      title:'护肤',
      type:false
    },{
      title:'日用品',
      type:false
    },{
      title:'家电',
      type:false
    },{
      title:'户外运动',
      type:false
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.topNavData)
  }

  handlnav(val){
    console.log(val)
  }
}
