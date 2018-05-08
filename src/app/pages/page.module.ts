import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { ZeroHeaderComponent } from "./zero-header/zero-header.component";
import { PageRoutingModule } from './page-routing.module';
import { EggGameComponent } from './egg-game/egg-game.component';
import { GameSwiftComponent } from './game-swift/game-swift.component';
import { HomeModule } from "./home/home.module";
import {ContactUsComponent} from './contact-us/contact-us.component';

const PAGES_COMPONENTS = [
  PageComponent,
  EggGameComponent,
  GameSwiftComponent,
  ZeroHeaderComponent,
  ContactUsComponent
];

@NgModule({
  imports: [
    PageRoutingModule,
    HomeModule,
    CommonModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PageModule {
}
