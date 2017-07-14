import {Component, Input, OnInit} from "@angular/core";
import {Hero} from "../hero/hero";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Logger} from "../logger.service";
import {HeroService} from "../hero/hero.service";

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private logger: Logger,
              private heroService: HeroService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => this.hero = this.heroService.getHero(+params.id));
  }
}
