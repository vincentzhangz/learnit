import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-card-courses',
  templateUrl: './home-card-courses.component.html',
  styleUrls: ['./home-card-courses.component.sass']
})
export class HomeCardCoursesComponent implements OnInit {
  @Input() course: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.course);
    // for (let i = 0; i < 10; i++) {
    //   this.courses.push({
    //     image: '../../../assets/img/lighting.jpg',
    //     description: `Desc Course ${i}`,
    //     title: `Course${i}`
    //   });
    // }
  }
}
