import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-homepage-progress',
  templateUrl: './user-homepage-progress.component.html',
  styleUrls: ['./user-homepage-progress.component.sass']
})
export class UserHomepageProgressComponent implements OnInit {
  @Input() user: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Here');
    console.log(this.user);
  }

}
