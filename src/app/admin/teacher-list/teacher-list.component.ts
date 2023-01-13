import { Component } from '@angular/core';
import { TeacherData } from 'src/app/shared/interfaces/teacher.interface';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
  constructor(private adminService: AdminService) { }
  teacherData!:TeacherData[]
  ngOnInit(): void {
    this.getTeacherDetails();
    
  }
  getTeacherDetails(){
    this.teacherData=this.adminService.fetchTeacherDetails();
    
  }

}
