import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LaunchComponent } from './auth/launch/launch.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'launch', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
