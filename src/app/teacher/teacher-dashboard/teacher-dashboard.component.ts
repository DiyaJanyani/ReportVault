import { Component } from '@angular/core';
import { faBell, faFilter, faFolderOpen, faRecycle, faSearch, faSignOut, faTrash, faUpload, faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent {
  icons={
    viewStudents:faUsers,
    upload:faUpload,
    uploaded:faFolderOpen,
    filter:faFilter,
    delete:faRecycle,
    search:faSearch,
    trash:faTrash,
    notification:faBell,
    signOut:faSignOut,
    

  }
}
