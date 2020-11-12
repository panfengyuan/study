import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items;
  constructor(
    private heroservice:HeroService
  ) { }

  ngOnInit(): void {
    this.items = this.heroservice.getHero().slice(0,4);
    console.log(this.items)
  }

}
