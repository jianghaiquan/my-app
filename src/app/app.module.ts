import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {HeroService} from "./hero/hero.service";
import {BackendService} from "./hero/backend.server";
import {Logger} from "./logger.service";
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {RouterModule, Routes} from "@angular/router";
import { HeroCreateComponent } from './hero-create/hero-create.component';

const appRoute: Routes = [
  {path:'heroes', component:HeroListComponent, data:{title:'test route'}},
  {path:'hero/:id', component:HeroDetailComponent},
  {path:'', redirectTo:'/heroes',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [
    Logger,
    HeroService,
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
