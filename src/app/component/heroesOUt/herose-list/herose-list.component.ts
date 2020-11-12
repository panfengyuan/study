import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../hero.service';

@Component({
  selector: 'app-herose-list',
  templateUrl: './herose-list.component.html',
  styleUrls: ['./herose-list.component.css']
})
export class HeroseListComponent implements OnInit {
  items;
  constructor(
    private herosever:HeroService
  ) { }

  ngOnInit(): void {
    this.items = this.herosever.getHero();
  }

}
