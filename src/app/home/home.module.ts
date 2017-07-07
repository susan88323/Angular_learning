import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PartnerDashboardComponent } from '../dashboard/partner-dashboard/partner-dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    PartnerDashboardComponent
  ],
  imports: [
    FormsModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: []
})
export class HomeModule {}
