import {Component, OnInit} from '@angular/core';
import {Course} from 'src/app/models/course';
import {ApiService} from 'src/app/services/api.service';
import {Forum} from 'src/app/models/forum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.sass']
})
export class ForumComponent implements OnInit {
  forums: any;
  modal: any;
  courses: Course[];
  selectedCourse: Course = null;
  forum: Forum = new Forum();
  loggedIn: boolean;

  constructor(private api: ApiService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.api.getToken()) {
      this.loggedIn = true;
      console.log(this.api.getToken());
    } else {
      this.loggedIn = false;
    }

    this.modal = document.getElementById('modal');

    this.api.getForums().subscribe(res => {
      this.forums = res;
    });

    window.onclick = function(event) {
      if (event.target === this.modal) {
        this.modal.style.display = 'none';
      }
    };
    this.api.getAllCourses().subscribe(res => {
      this.courses = res;
    });
  }

  postForum(): void {
    if (this.selectedCourse == null) {
      alert('Please select the course');
      return;
    }
    this.forum.course_id = this.selectedCourse.course_id;
    this.forum.user_id = sessionStorage.getItem('userId');
    // console.log(this.forum)
    this.api.postForum(this.forum).subscribe(res => {
      alert('success');
      window.location.reload();
    });
  }


}
