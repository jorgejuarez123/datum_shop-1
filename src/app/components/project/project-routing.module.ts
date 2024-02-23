import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { ProjectListComponent } from './project-list/project-list.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create-new',
        component: CreateNewComponent,
        data: {
          title: 'Create New',
          breadcrumb: 'Create New',
          animation: [routingAnimation]
        }
       
      },
      {
        path: 'project-list',
        component: ProjectListComponent,
        data: {
          title: 'Project List',
          breadcrumb: 'Project List',
          animation: [routingAnimation]
        }
       
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }