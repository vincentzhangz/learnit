import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-card-courses',
  templateUrl: './home-card-courses.component.html',
  styleUrls: ['./home-card-courses.component.sass']
})
export class HomeCardCoursesComponent implements OnInit {
  courses: any = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.courses.push({
        image: '../../../assets/img/lighting.jpg',
        description: `Desc Course ${i}`,
        title: `Course${i}`
      });
    }
  }
}
