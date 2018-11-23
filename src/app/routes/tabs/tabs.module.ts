import { NgModule, Component } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import { MySettingComponent } from './my-setting/my-setting.component';

const COMPONENTS =[
  HomeComponent,
  TaskComponent,
  ProjectComponent,
  MySettingComponent,

];

@NgModule({
  declarations: [
    ...COMPONENTS,
    
  ],
  imports: [
  SharedModule,
  TabsRoutingModule
  ]
})
export class TabsModule { }
