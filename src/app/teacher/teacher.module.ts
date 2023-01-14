import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { RouterModule } from '@angular/router';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { UploadedDocumentsComponent } from './uploaded-documents/uploaded-documents.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentDetailsComponent } from './document-details/document-details.component';
// import { TeacherFiltersComponent } from './teacher-filters/teacher-filters.component';



@NgModule({
  declarations: [
    UploadComponent,
    ViewStudentsComponent,
    UploadedDocumentsComponent,
    TeacherDashboardComponent,
    UploadComponent,
    DocumentDetailsComponent,
    // TeacherFiltersComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule
    
  ],
  exports:[
    TeacherDashboardComponent,
    
  ]
})
export class TeacherModule { }
