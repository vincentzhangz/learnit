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
import { UserHomepageProgressComponent } from './components/homepage/user-homepage-progress/user-homepage-progress.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ProgressBarModule} from "angular-progress-bar";
import { HomeCardCoursesComponent } from './components/homepage/home-card-courses/home-card-courses.component'
import {CarouselModule} from 'primeng/carousel';
import { ItemCardCategoryComponent } from './components/item-card-category/item-card-category.component';


@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    HomeComponent,
    ItemCardMediumComponent,
    TestPageComponent,
    UserHomepageProgressComponent,
    HomeCardCoursesComponent,
    ItemCardCategoryComponent,
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
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
