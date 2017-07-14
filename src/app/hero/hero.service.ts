/**
 *
 * LICENSE
 *
 * @version V2.0.0
 * @Copyright © 2017 江苏华叶跨域教育科技发展股份有限公司 Corporation. All rights reserved.
 *
 * Created by JiangHaiquan on 2017/7/12.
 */

import {Logger} from '../logger.service';
import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {BackendService} from "./backend.server";

@Injectable()
export class HeroService {

  private heroes: Hero[] = [];

  constructor(private logger: Logger, private backend: BackendService) {
    this.backend.getAll(Hero).then((heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes`);
      this.heroes = heroes;
    });
  }

  getHeroes() {
    return this.heroes;
  }

  getHero(id: number|string) {
    if (this.heroes.length === 0) {
      return null;
    }
    return this.heroes.find((hero: Hero) => hero.id === +id)
  }
}
