import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusicFileComponent } from './add-music-file.component';

describe('AddMusicFileComponent', () => {
  let component: AddMusicFileComponent;
  let fixture: ComponentFixture<AddMusicFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMusicFileComponent]
    });
    fixture = TestBed.createComponent(AddMusicFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
