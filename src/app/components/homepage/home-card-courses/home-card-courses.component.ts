import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-card-courses',
  templateUrl: './home-card-courses.component.html',
  styleUrls: ['./home-card-courses.component.sass']
})
export class HomeCardCoursesComponent implements OnInit {
  courses: any;

  constructor() {
  }

  ngOnInit(): void {
    this.courses = [
      'asdasd',
      'asdasdasd',
      'asdadsasdasdasd',
      'asdasd',
      'asdasdasd',
      'asdadsasdasdasd',
      'asdasd',
      'asdasdasd',
      'asdadsasdasdasd',
      'asdasd',
      'asdasdasd',
      'asdadsasdasdasd',
      'asdasd',
      'asdasdasd',
      'asdadsasdasdasd',
      'asdasd',
      'asdasdasd',
      'asdadsasdasdasd',
      'asdasd',
      'asdasdasd',
      'asdadsasdasdasd',
      'asdasd',
      'asdasdasd',
      'asdadsasdasdasd',

    ];
  }
}
