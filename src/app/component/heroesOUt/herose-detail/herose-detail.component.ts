import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroService } from '../../../hero.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';
// import { switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-herose-detail',
  templateUrl: './herose-detail.component.html',
  styleUrls: ['./herose-detail.component.css']
})
export class HeroseDetailComponent implements OnInit {
  // name = new FormControl('');
  heroid_=1;
  heroeid="";
  // heroes$: Observable;
  selectedId: number;
  constructor(
    private heroservice:HeroService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.heroid_ = params['id'];
      alert(this.heroid_)
    });
  }

}
