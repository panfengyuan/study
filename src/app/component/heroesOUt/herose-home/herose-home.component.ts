import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herose-home',
  templateUrl: './herose-home.component.html',
  styleUrls: ['./herose-home.component.css']
})
export class HeroseHomeComponent implements OnInit {
  items=[];
  constructor() { }

  ngOnInit(): void {
  }

}
