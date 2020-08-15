import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'learnit';
  userId = sessionStorage.getItem('userId');
  router: Router;

  logout(): void {
    sessionStorage.clear();
    // this.router.navigate(['/']);
    window.location.reload();
  }
}
