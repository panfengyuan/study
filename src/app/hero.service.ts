import { Injectable } from '@angular/core';

import { heroes } from './heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes=heroes;
  constructor() { }

  getHero() {
    return this.heroes;
  }

  addHeroes(val) {
    this.heroes.push(val);
  }

  setHero(id,name){
    for (let i = 0; i < this.heroes.length; i++) {
      if(id==this.heroes[i].id){
        this.heroes[i].name=name;
      }
    }
  }
}
