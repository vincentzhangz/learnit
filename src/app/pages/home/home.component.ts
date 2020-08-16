import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  category: any;
  user: User;
  course: any;
  enrolledCourse: any = [];

  constructor(private  apiService: ApiService, private  router: Router) {
  }


  ngOnInit(): void {
    if (sessionStorage.getItem('userId')) {
      this.getCurrentUser();
    }

    this.apiService.getTopCourse().subscribe(res => this.saveCourses(res));
    this.apiService.getAllCategory().subscribe(res => this.saveCategory(res));
    this.apiService.getEnrolledCourses(sessionStorage.getItem('userId')).subscribe(res => this.saveEnrolled(res));

  }

  public getCurrentUser(): void {
    this.apiService.getCurrentUser().subscribe(res => this.saveUser(res));
  }

  saveUser(response): any {
    this.user = response;
  }

  saveCourses(response): any {
    this.course = response;
  }

  saveCategory(response): any {
    this.category = response;
  }

  saveEnrolled(response): any {
    let count = response.listCourse.length;

    for (let i = 0; i < count; i++) {
      this.enrolledCourse.push(response.listCourse[i][0]);
    }
    console.log(this.enrolledCourse);
  }

  goToCourseDetail(courseId): void {
    this.router.navigateByUrl('course/' + courseId);
  }
}
