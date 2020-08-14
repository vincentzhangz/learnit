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
import {ItemCardMediumComponent} from './components/item-card-medium/item-card-medium.component';
import {MatCardModule} from '@angular/material/card';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import {RatingModule} from 'ng-starrating';
import {NgxStarsModule} from 'ngx-stars';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    HomeComponent,
    ItemCardMediumComponent,
    TestPageComponent,
    CourseDetailComponent
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
    RatingModule,
    NgxStarsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
