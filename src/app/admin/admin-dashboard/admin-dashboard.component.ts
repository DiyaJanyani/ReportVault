import { Component } from '@angular/core';
import { faBell, faCheckDouble, faDashboard, faQuestion, faSearch, faSignOut, faUsers, faUserSecret } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  icons={
    dashBoard:faDashboard,
    student:faUsers,
    teacher:faUserSecret,
    allow:faCheckDouble,
    search:faSearch,
    queries:faQuestion,
    notification:faBell,
    signOut:faSignOut,
    

  }
}
