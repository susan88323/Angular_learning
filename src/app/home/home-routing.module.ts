import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerDashboardComponent } from '../dashboard/partner-dashboard/partner-dashboard.component';
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', component: PartnerDashboardComponent }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
