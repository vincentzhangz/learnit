import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.sass']
})
export class CourseDetailComponent implements OnInit {
  @Input() course: any;
  @Input() assignment: any;

  constructor() {
  }

  ngOnInit(): void {
    this.course = {
      module: [
        {
          id: 1,
          title: 'Module 1'
        },
        {
          id: 2,
          title: 'Module 2'
        }
      ]
    };

    this.assignment = [{
      title: 'Asg 1'
    }, {
      title: 'Asg 2'
    }
    ];
  }
}
