import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MusicCardComponent } from './music-card/music-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddMusicFormComponent } from './add-music-form/add-music-form.component';
import { DialogModule } from 'primeng/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddMusicCoverPicComponent } from './add-music-cover-pic/add-music-cover-pic.component';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { AddMusicFileComponent } from './add-music-file/add-music-file.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MusicCardComponent,
    AddMusicFormComponent,
    AddMusicCoverPicComponent,
    AddMusicFileComponent,
    ProfileComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    SideMenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatTooltipModule,
    CardModule,
    ButtonModule,
    MatGridListModule,
    DialogModule,
    MatFormFieldModule,
    MatInputModule,
    ToastModule,
    FileUploadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
