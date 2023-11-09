import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusicCoverPicComponent } from './add-music-cover-pic.component';

describe('AddMusicCoverPicComponent', () => {
  let component: AddMusicCoverPicComponent;
  let fixture: ComponentFixture<AddMusicCoverPicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMusicCoverPicComponent]
    });
    fixture = TestBed.createComponent(AddMusicCoverPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
