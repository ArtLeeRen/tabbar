import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import { MySettingComponent } from './my-setting/my-setting.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { tabIndex: 0 } },
  { path: 'task', component: TaskComponent, data: { tabIndex: 1 } },
  { path: 'project', component: ProjectComponent, data: { tabIndex: 2 } },
  { path: 'my', component: MySettingComponent, data: { tabIndex: 3 } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
