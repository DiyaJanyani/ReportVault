import { Injectable } from '@angular/core';
import { StudentData } from '../shared/interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  studentData:StudentData[]=[
    {
      "StudentID":1,
      "FirstName":"Eliyana",
      "LastName":"Adams",
      "ClassName":"D12A",
      "Year":"TE",
      "Mobile":9730319048,
      "Email":"eliyanaadams",
      "Username":"eliyana"
    },
    {
      "StudentID":1,
      "FirstName":"Eliyana",
      "LastName":"Adams",
      "ClassName":"D12A",
      "Year":"TE",
      "Mobile":9730319048,
      "Email":"eliyanaadams",
      "Username":"eliyana"
    },
    {
      "StudentID":1,
      "FirstName":"Eliyana",
      "LastName":"Adams",
      "ClassName":"D12A",
      "Year":"TE",
      "Mobile":9730319048,
      "Email":"eliyanaadams",
      "Username":"eliyana"
    }
  ]
    fetchDetails():StudentData[]{
      return this.studentData
    }


  

  constructor() { }
}
