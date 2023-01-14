import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './admin/student-list/student-list.component';
import { TeacherListComponent } from './admin/teacher-list/teacher-list.component';
import { ViewDocumentsComponent } from './student/view-documents/view-documents.component';
import { DocumentDetailsComponent } from './teacher/document-details/document-details.component';
// import { TeacherFiltersComponent } from './teacher/teacher-filters/teacher-filters.component';
import { UploadComponent } from './teacher/upload/upload.component';
import { UploadedDocumentsComponent } from './teacher/uploaded-documents/uploaded-documents.component';
import { ViewStudentsComponent } from './teacher/view-students/view-students.component';

const routes: Routes = [
   {path:'documents',component:ViewDocumentsComponent},
   {path:'viewStudents',component:ViewStudentsComponent},
   {path:'uploaded',component:UploadedDocumentsComponent},
   {path:'upload',component:UploadComponent},
   {path:'students',component:StudentListComponent},
   {path:'teacher',component:TeacherListComponent},
   {path:'documentDetails',component:DocumentDetailsComponent},

  //  {path:'filters',component:TeacherFiltersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
