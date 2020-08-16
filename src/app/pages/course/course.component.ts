import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {Course} from 'src/app/models/course';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {

  courses: Course[];
  id: string = null;
  lecturer: boolean;

  constructor(private api: ApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCurrentUser().subscribe(res => this.checkRole(res));


    if (this.id == '' || this.id == null) {
      this.api.getAllCourses().subscribe(res => {

        this.courses = res;
        console.log(this.courses);
      });
    } else {
      console.log('gatcha');
      this.api.getCoursesByCategoryId(this.id).subscribe(res => {
        this.courses = res;
        console.log(this.courses);
      });
    }
  }

  goToCourseDetail(id: string) {
    this.router.navigateByUrl('course/' + id);
  }

  createNewCourse(): any {
    this.router.navigateByUrl('createCourse');
  }

  checkRole(response) {
    if (response.user_role === 'lecturer') {
      this.lecturer = true;
    } else {
      this.lecturer = false;
    }
  }
}
