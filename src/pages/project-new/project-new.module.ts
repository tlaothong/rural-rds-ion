import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectNewPage } from './project-new';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProjectNewPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(ProjectNewPage),
  ],
})
export class ProjectNewPageModule {}
