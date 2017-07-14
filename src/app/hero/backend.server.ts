/**
 *
 * LICENSE
 *
 * @version V2.0.0
 * @Copyright © 2017 江苏华叶跨域教育科技发展股份有限公司 Corporation. All rights reserved.
 *
 * Created by JiangHaiquan on 2017/7/13.
 */

import {Injectable, Type} from "@angular/core";
import {Hero} from "./hero";
import {Logger} from "../logger.service";

const HEROES = [
  new Hero('wang','female', 'make ice'),
  new Hero('superman','male', 'fly'),
  new Hero('zhangfei','female')
];

@Injectable()
export class BackendService {

  constructor(private logger: Logger) {
  }

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Hero) {
      return Promise.resolve<Hero[]>(HEROES);
    }
    let err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
