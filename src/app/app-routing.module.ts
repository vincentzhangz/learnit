import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ForumComponent} from './pages/forum/forum.component';
import { LoginComponent } from './pages/login/login.component';
import {TestPageComponent} from './pages/test-page/test-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'test',
    component: TestPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
