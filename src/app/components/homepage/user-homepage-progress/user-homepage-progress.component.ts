import {Course} from 'src/app/models/course';
import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';

@Component({
  selector: 'app-user-homepage-progress',
  templateUrl: './user-homepage-progress.component.html',
  styleUrls: ['./user-homepage-progress.component.sass']
})
export class UserHomepageProgressComponent implements OnInit {
  @Input() user: any;
  progress = 0;
  courses: Course;

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.getProgress(sessionStorage.getItem('userId')).subscribe(res => this.setProgress(res));
    // this.api.getEnrolledCourses(this.user.user_id).subscribe(res => console.log(res));
  }

  setProgress(res: any): void {
    this.progress = res.listAnswer.length / res.listAssignment.length * 100;
  }
}
