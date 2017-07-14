import {Component, OnInit} from "@angular/core";
import {HeroService} from "../hero/hero.service";
import {Logger} from "../logger.service";
import {Hero} from "../hero/hero";

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private logger: Logger) {
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  selectHero(hero: Hero) {
    this.logger.warn(hero);
    this.selectedHero = hero;
  }
}
