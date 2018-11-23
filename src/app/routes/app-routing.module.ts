import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabPagesComponent } from '../layout/tab-pages/tab-pages.component';
 
const routes: Routes = [
  { path: '', redirectTo: 'tabs/home', pathMatch: 'full' },
  {
    path: 'tabs',
    component:TabPagesComponent,
    loadChildren: './tabs/tabs.module#TabsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
exports: [RouterModule]
})
export class AppRoutingModule { }
