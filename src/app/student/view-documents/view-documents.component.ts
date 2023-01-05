import { Component } from '@angular/core';
import { faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-documents',
  templateUrl: './view-documents.component.html',
  styleUrls: ['./view-documents.component.css']
})
export class ViewDocumentsComponent {
  icons={
    file1:faFilePdf,
    download:faDownload,

  }

}
