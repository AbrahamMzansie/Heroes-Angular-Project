import { Component , Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent {
  @Input() selectedHero? :Hero;

}
