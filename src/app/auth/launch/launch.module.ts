import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LaunchComponent } from './launch.component';
import { DirectionComponent } from './direction/direction.component';
import { LoginComponent } from './login/login.component';
import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchService } from './launch.service';

@NgModule({
  declarations: [
    LaunchComponent,
    DirectionComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    LaunchRoutingModule
  ],
  providers: [
    LaunchService
  ]
})
export class LaunchModule {}
