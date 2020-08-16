import {ProfileComponent} from './pages/profile/profile.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ForumComponent} from './pages/forum/forum.component';
import {LoginComponent} from './pages/login/login.component';
import {TestPageComponent} from './pages/test-page/test-page.component';
import {CourseDetailComponent} from './pages/course-detail/course-detail.component';
import {RegisterComponent} from './pages/register/register.component';
import {ForumDetailComponent} from './pages/forum/forum-detail/forum-detail.component';
import {CreateCourseComponent} from './pages/create-course/create-course.component';
import {CourseComponent} from './pages/course/course.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'forum/:id',
    component: ForumDetailComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'course/:id',
    component: CourseDetailComponent,
  },
  {
    path: 'course/category/:id',
    component: CourseComponent,
  },
  {
    path: 'createCourse',
    component: CreateCourseComponent,
  },
  {
    path: 'createCourse/:course_id',
    component: CreateCourseComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
