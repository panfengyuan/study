import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../hero.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items;
  name;
  selectedId: number;
  constructor(
    private heroservice:HeroService,
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    this.items = this.heroservice.getHero().slice(0,4);
  }

}
