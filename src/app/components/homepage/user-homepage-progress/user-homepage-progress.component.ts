import { Course } from 'src/app/models/course';
import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-homepage-progress',
  templateUrl: './user-homepage-progress.component.html',
  styleUrls: ['./user-homepage-progress.component.sass']
})
export class UserHomepageProgressComponent implements OnInit {
  @Input() user: any;

  courses:Course
  constructor(private api: ApiService) {
    
  }


  ngOnInit(): void {
    console.log('Here');
    console.log(this.user);
    this.api.getProgress(this.user.user_id).subscribe(res => this.getCourses(res))
    // this.api.getEnrolledCourses(this.user.user_id).subscribe(res => this.getCourses(res))
  }

  getCourses(res:any){
    this.courses = res;
    console.log(this.courses)
  }

}
