import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectionComponent } from './direction/direction.component';
import { LoginComponent } from './login/login.component';
import { LaunchComponent } from './launch.component';


const launchRoutes: Routes = [
  { path: 'launch', component: LaunchComponent, children: [
    { path: '', component: DirectionComponent },
    { path: 'partner-login', component: LoginComponent },
    { path: 'customer-login', component: LoginComponent },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(launchRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class LaunchRoutingModule {}
