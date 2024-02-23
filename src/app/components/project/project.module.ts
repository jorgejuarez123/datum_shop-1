import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectListService } from 'src/app/shared/services/project/project-list.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadFileComponent } from './create-new/upload-file/upload-file.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProjectListComponent, CreateNewComponent, UploadFileComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxDropzoneModule,
    NgbModule,
  ],
  providers: [ProjectListService],
})
export class ProjectModule {}