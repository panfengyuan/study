import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-herose-home',
  templateUrl: './herose-home.component.html',
  styleUrls: ['./herose-home.component.css']
})
export class HeroseHomeComponent implements OnInit {
  
  items=[];
  selectedId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
