import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroesService: HeroService) {}
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(data: Hero) {
    this.selectedHero = data;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroesService.getHeroes().subscribe(heroesList => this.heroes =heroesList);
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
     
  }
}
