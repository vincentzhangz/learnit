import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ForumComponent} from './pages/forum/forum.component';
import {HomeComponent} from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ItemCardMediumComponent } from './components/item-card-medium/item-card-medium.component';
import {MatCardModule} from '@angular/material/card';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import {RatingModule} from 'ng-starrating';
import {NgxStarsModule} from 'ngx-stars';
import {MatTabsModule} from '@angular/material/tabs';


import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { FileUploadModule} from 'ng2-file-upload';
import { UploadFileBtnComponent } from './components/upload-file-btn/upload-file-btn.component'
@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    HomeComponent,
    LoginComponent,
    ItemCardMediumComponent,
    TestPageComponent,
    CourseDetailComponent,
    RegisterComponent,
    UploadFileBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    RatingModule,
    NgxStarsModule,
    MatTabsModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
