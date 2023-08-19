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
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroesService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroesService.deleteHero(hero.id).subscribe();
  }
}
