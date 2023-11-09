import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: HttpEvent<HttpResponse<null>>;
  files: File[];
}

@Component({
  selector: 'app-add-music-file',
  templateUrl: './add-music-file.component.html',
  styleUrls: ['./add-music-file.component.css'],
  providers: [MessageService]
})
export class AddMusicFileComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) { }

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
