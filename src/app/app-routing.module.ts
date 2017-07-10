import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LaunchComponent } from './auth/launch/launch.component';
import { SystemUpdateErrorComponent } from './system-update-error/system-update-error.component';
import { SystemUpdateComponent } from './system-update/system-update.component';
import { PreReqComponent } from './pre-req/pre-req.component';
import { SiteComponent } from './site/site.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'launch', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'system-update-error', component: SystemUpdateErrorComponent},
  { path: 'system-update', component: SystemUpdateComponent},
  { path: 'pre-req', component: PreReqComponent },
  { path: 'site', component: SiteComponent },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
