import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PartnerDashboardComponent } from './dashboard/partner-dashboard/partner-dashboard.component';
import { LaunchModule } from './auth/launch/launch.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    PartnerDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LaunchModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
