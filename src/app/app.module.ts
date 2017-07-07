import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LaunchModule } from './auth/launch/launch.module';
import { SharedModule } from './shared/shared.module';

import { WikipediaSearchService } from './shared/wikipedia-search.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    HomeModule,
    LaunchModule,
    SharedModule
  ],
  providers: [WikipediaSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
