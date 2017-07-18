import {Component, OnInit, Input} from "@angular/core";
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
  submitted: boolean = false;

  herod: Hero;

  constructor() {
  }

  ngOnInit() {
    this.herod = new Hero('', 'male','');
  }

  newHero(){
    this.herod = new Hero('新形象', 'male','abc');
  }

  onSubmit(hero){
    this.submitted = true;
    console.log(hero);
  }

}
