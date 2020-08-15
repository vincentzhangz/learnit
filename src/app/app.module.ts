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
import {LoginComponent} from './pages/login/login.component';
import {ItemCardMediumComponent} from './components/item-card-medium/item-card-medium.component';
import {MatCardModule} from '@angular/material/card';
import {TestPageComponent} from './pages/test-page/test-page.component';
import {UserHomepageProgressComponent} from './components/homepage/user-homepage-progress/user-homepage-progress.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ProgressBarModule} from 'angular-progress-bar';
import {HomeCardCoursesComponent} from './components/homepage/home-card-courses/home-card-courses.component';
import {CarouselModule} from 'primeng/carousel';
import {ItemCardCategoryComponent} from './components/item-card-category/item-card-category.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {ForumDetailComponent} from './pages/forum/forum-detail/forum-detail.component';
import {CourseDetailComponent} from './pages/course-detail/course-detail.component';
import {RatingModule} from 'ng-starrating';
import {NgxStarsModule} from 'ngx-stars';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './pages/register/register.component';
import {FileUploadModule} from 'ng2-file-upload';
import {MatBadgeModule} from '@angular/material/badge';
import {CourseComponent} from './pages/course/course.component';
import {CreateCourseComponent} from './pages/create-course/create-course.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    HomeComponent,
    LoginComponent,
    ItemCardMediumComponent,
    TestPageComponent,
    UserHomepageProgressComponent,
    HomeCardCoursesComponent,
    ItemCardCategoryComponent,
    ProfileComponent,
    ForumDetailComponent,
    CourseDetailComponent,
    RegisterComponent,
    CourseComponent,
    CreateCourseComponent
  ],
  imports: [
    CarouselModule,
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
    MatExpansionModule,
    ProgressBarModule,
    MatInputModule,
    MatSelectModule,
    RatingModule,
    NgxStarsModule,
    MatTabsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    MatBadgeModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
