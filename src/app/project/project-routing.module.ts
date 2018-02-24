import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectComponent} from './project.component';

const projectDetailRoutes: Routes = [
  { path: 'project/:id', component: ProjectComponent },
  { path: 'project', redirectTo: '/project/1'}
];


@NgModule({
  imports: [
    RouterModule.forChild(projectDetailRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }
