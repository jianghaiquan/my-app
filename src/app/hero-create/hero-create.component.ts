import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../hero/hero";

@Component({
  selector: 'hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: [
    './hero-create.component.css',
    '../app.component.css'
  ]
})
export class HeroCreateComponent implements OnInit {

  sexes: string[] = ['male', 'female'];

  @Input() herod: Hero;

  constructor() {
  }

  ngOnInit() {
  }

  newHero(){
    this.herod = new Hero('新形象', 'male','abc');
  }

  onSubmit(hero){
    //test
    console.log(hero);
  }
}
