import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ForumComponent} from './pages/forum/forum.component';
import {TestPageComponent} from './pages/test-page/test-page.component';
import {CourseDetailComponent} from './pages/course-detail/course-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'test',
    component: TestPageComponent
  },
  {
    path: 'course/:id',
    component: CourseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
