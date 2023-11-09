import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-music-form',
  templateUrl: './add-music-form.component.html',
  styleUrls: ['./add-music-form.component.css']
})
export class AddMusicFormComponent {
  visible: boolean = false;

  @Input() uploadedFiles: any[] = []

  showDialog() {
    this.visible = true;
  }

  music: { title: string, description: string, song: any } = { title: '', description: '', song: undefined };

  constructor(private http: HttpClient) { }

  submitForm() {
    const url = 'http://localhost:8080/addmusic';
    this.http.post(url, this.music).subscribe(
      (response) => {
        try {
          const responseData = JSON.parse(JSON.stringify(response));
          console.log(responseData);
          console.log('Response:', response);

          this.resetForm();
          this.visible = false;
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  resetForm() {
    this.music = { title: '', description: '', song: undefined };
  }
}