/**
 *
 * LICENSE
 *
 * @version V2.0.0
 * @Copyright © 2017 江苏华叶跨域教育科技发展股份有限公司 Corporation. All rights reserved.
 *
 * Created by JiangHaiquan on 2017/7/12.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class Logger {
  log(msg: any){
    console.log(msg);
  }

  warn(msg: any){
    console.warn(msg);
  }

  error(msg: any){
    console.error(msg);
  }
}
