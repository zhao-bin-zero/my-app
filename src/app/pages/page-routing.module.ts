import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {PageComponent} from "./page.component";
import {EggGameComponent} from "./egg-game/egg-game.component";
import {GameSwiftComponent} from "./game-swift/game-swift.component";


const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [{
        path: 'index',
        component: HomeComponent,
      },
      {
        path: 'egg-game',
        component: EggGameComponent,
      },
      {
        path: 'game-swift',
        component: GameSwiftComponent,
      },
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full',
      }
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {
}
