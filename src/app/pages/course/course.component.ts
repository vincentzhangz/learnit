import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {Course} from 'src/app/models/course';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {

  courses: Course[];

  constructor(private api: ApiService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.api.getAllCourses().subscribe(res => {
      this.courses = res;
      console.log(this.courses);
    });
  }

  goToCourseDetail(id: string) {
    this.router.navigateByUrl('course/' + id);
  }

}
