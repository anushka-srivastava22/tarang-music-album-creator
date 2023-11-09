import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongDetail } from '../song-detail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient) { }
  results: SongDetail[] = []              

  refresh() {
    this.results = []
    const url = 'http://localhost:8080/getmusic';
    this.http.get(url).subscribe(
      (response) => {
        try {
          const responseData = JSON.parse(JSON.stringify(response));
          console.log(responseData.music);
          for (let index = 0; index < responseData.music.length; index++) {
            this.results.push(responseData.music[index][index+1]);
          }
          
          console.log(this.results)
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  ngAfterViewInit() {
    this.refresh()
  }
}
