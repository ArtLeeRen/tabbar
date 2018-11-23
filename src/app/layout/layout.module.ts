import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { DefaultComponent } from '../layout/default/default.component';
import { TabPagesComponent } from '../layout/tab-pages/tab-pages.component';

@NgModule({
  declarations: [
    DefaultComponent,
    TabPagesComponent
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    DefaultComponent,
    TabPagesComponent
  ], 
  exports: [
    DefaultComponent,
    TabPagesComponent
  ]
})
export class LayoutModule { }
