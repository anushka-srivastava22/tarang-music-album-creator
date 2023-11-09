import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: HttpEvent<HttpResponse<null>>;
  files: File[];
}

@Component({
  selector: 'app-add-music-cover-pic',
  templateUrl: './add-music-cover-pic.component.html',
  styleUrls: ['./add-music-cover-pic.component.css'],
  providers: [MessageService]
})

export class AddMusicCoverPicComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) { }

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
