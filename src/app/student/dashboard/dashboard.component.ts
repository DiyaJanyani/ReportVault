import { Component } from '@angular/core';
import { faDashboard,faStar,faFolderOpen,faDownload, faServer,faSearch,faComment,faBell,faSignOut,faPaperclip, faQuestionCircle, faQuestion,     } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  icons={
    dashBoard:faDashboard,
    quickAccess:faStar,
    viewDocuments:faFolderOpen,
    dropIn:faDownload,
    filter:faServer,
    search:faSearch,
    queries:faQuestion,
    notification:faBell,
    signOut:faSignOut,
    test:faPaperclip

  }
}
