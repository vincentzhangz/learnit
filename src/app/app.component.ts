import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'learnit';
  userId = sessionStorage.getItem('userId');

  logout(): void {
    sessionStorage.clear();
    window.location.href = '/';
  }

  profile(): void {
    window.location.href = '/profile';
  }

}
