import { Component } from '@angular/core';
import { StudentData } from 'src/app/shared/interfaces/student.interface';

import { AdminService } from '../admin.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  constructor(private adminService: AdminService) { }
  studentData!:StudentData[]
  ngOnInit(): void {
    this.getStudentDetails();
    
  }
  getStudentDetails(){
    this.studentData=this.adminService.fetchDetails();
    
  }

}
