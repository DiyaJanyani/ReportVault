import { Component } from '@angular/core';
import { faDashboard,faUserGraduate,faChalkboardTeacher,faRulerVertical,faBookReader,faSearch,faComment,faBell,faSignOut,faPaperclip} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  icons={
    dashBoard:faDashboard,
    userGraduate:faUserGraduate,
    teacher:faChalkboardTeacher,
    standard:faRulerVertical,
    subjects:faBookReader,
    search:faSearch,
    comments:faComment,
    notification:faBell,
    signOut:faSignOut,
    test:faPaperclip

  }

}
