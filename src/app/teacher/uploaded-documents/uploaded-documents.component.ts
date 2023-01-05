import { Component } from '@angular/core';
import { faDownload, faFileExcel, faFileImage, faFilePdf, faFilePowerpoint, faFileText, faFolderClosed, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-uploaded-documents',
  templateUrl: './uploaded-documents.component.html',
  styleUrls: ['./uploaded-documents.component.css']
})
export class UploadedDocumentsComponent {
  icons={
    file1:faFilePdf,
    file2:faFolderOpen,
    file3:faFileText,
    file4:faFilePowerpoint,
    file5:faFileImage,
    download:faDownload,

  }
}
