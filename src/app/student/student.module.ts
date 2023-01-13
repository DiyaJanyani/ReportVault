import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewDocumentsComponent } from './view-documents/view-documents.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    QueryComponent,
    DashboardComponent,
    ViewDocumentsComponent,
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    
  ],
  exports:[
    DashboardComponent,
  ]
})
export class StudentModule { }
