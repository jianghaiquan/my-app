/**
 *
 * LICENSE
 *
 * @version V2.0.0
 * @Copyright © 2017 江苏华叶跨域教育科技发展股份有限公司 Corporation. All rights reserved.
 *
 * Created by JiangHaiquan on 2017/7/13.
 */

let nextId = 1;

/**
 *
 *
 */
export class Hero{
  id:number;

  constructor(public name:string, public sex: string, public power?:string){
    this.id = nextId++;
  }
}
