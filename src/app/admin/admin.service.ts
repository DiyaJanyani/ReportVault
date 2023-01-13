import { Injectable } from '@angular/core';
import { StudentData } from '../shared/interfaces/student.interface';
import { TeacherData } from '../shared/interfaces/teacher.interface';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  studentData:StudentData[]=[
    {
      "StudentID":1,
      "FirstName":"Eliyana",
      "LastName":"Adams",
      "ClassName":"D12A",
      "Year":"TE",
      "Mobile":9730319048,
      "Email":"eliyanaadams",
      "Username":"eliyanaadams"
    },
    {
      "StudentID":1,
      "FirstName":"Eliyana",
      "LastName":"Adams",
      "ClassName":"D12A",
      "Year":"TE",
      "Mobile":9730319048,
      "Email":"eliyanaadams",
      "Username":"eliyanaadams"
    },
    {
      "StudentID":1,
      "FirstName":"Eliyana",
      "LastName":"Adams",
      "ClassName":"D12A",
      "Year":"TE",
      "Mobile":9730319048,
      "Email":"eliyanaadams",
      "Username":"eliyanaadams"
    }
  ]

  teacherData:TeacherData[]=[
    {
      "TeacherID":1,
      "Name":"Eliyana Adams",
      
      
      "Mobile":9730319048,
      "Email":"eliyanaadams",
      "Username":"eliyanaadams"
    },
    {
      "TeacherID":1,
      "Name":"Eliyana Adams",
      
      
      "Mobile":9730319048,
      "Email":"eliyanaadams",
      "Username":"eliyanaadams"
    },
    {
      "TeacherID":1,
      "Name":"Eliyana Adams",
      
      
      "Mobile":9730319048,
      "Email":"eliyanaadams",
      "Username":"eliyanaadams"
    },
    
  ]
    fetchDetails():StudentData[]{
      return this.studentData
    }
    fetchTeacherDetails():TeacherData[]{
      return this.teacherData
    }

  constructor() { }
}
