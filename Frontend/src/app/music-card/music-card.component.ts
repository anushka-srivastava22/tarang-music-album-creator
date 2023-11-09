import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongDetail } from '../song-detail';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent {
  @Input() musicdetail: SongDetail | undefined;

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
