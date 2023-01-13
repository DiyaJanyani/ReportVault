import { Component } from '@angular/core';
import { faDownload, faFilePdf, faInfo } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from 'src/app/admin/admin.service';
import { StudentData } from 'src/app/shared/interfaces/student.interface';


import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent {
  constructor(private adminService: AdminService) { }

  studentData!:StudentData[]
  ngOnInit(): void {
    this.getStudentDetails();
    
  }
  getStudentDetails(){
    this.studentData=this.adminService.fetchDetails();
    
  }
  icons={
    file1:faFilePdf,
    download:faDownload,
    info:faInfo

  }
}
