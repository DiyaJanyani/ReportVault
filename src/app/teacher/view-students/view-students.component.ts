import { Component } from '@angular/core';
import { faDownload, faFilePdf, faInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent {
  icons={
    file1:faFilePdf,
    download:faDownload,
    info:faInfo

  }
}
