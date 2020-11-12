import { Component, OnInit } from '@angular/core';

import { InputOutputComponent } from '../input-output/input-output.component';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  // input和output
  title = 'study';
  items=[];
  constructor() { }

  ngOnInit(): void {
  }
  // input output
  addfn(val:string) {
    this.items.push({
      name:val,
      type:false
    });
    console.log(this.items)
  }
}
