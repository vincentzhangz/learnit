import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnChanges {
  title = 'learnit';
  userId = sessionStorage.getItem('userId');

  logout(): void {
    sessionStorage.clear();
    window.location.href = '/';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change');
  }
}
