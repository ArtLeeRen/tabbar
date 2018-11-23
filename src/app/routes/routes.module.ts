import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './tabs/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    AppRoutingModule
  ]
})
export class RoutesModule { }
