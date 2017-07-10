import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LaunchModule } from './auth/launch/launch.module';
import { SharedModule } from './shared/shared.module';

import { WikipediaSearchService } from './shared/wikipedia-search.service';
import { SystemUpdateErrorComponent } from './system-update-error/system-update-error.component';
import { SystemUpdateComponent } from './system-update/system-update.component';
import { PreReqComponent } from './pre-req/pre-req.component';
import { SiteComponent } from './site/site.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteListItemComponent } from './dashboard/site-list-item/site-list-item.component';
import { CustomerListItemComponent } from './dashboard/customer-list-item/customer-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemUpdateErrorComponent,
    SystemUpdateComponent,
    PreReqComponent,
    SiteComponent,
    DashboardComponent,
    SiteListItemComponent,
    CustomerListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    HomeModule,
    LaunchModule,
    SharedModule,
    AngularFontAwesomeModule
  ],
  providers: [WikipediaSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
