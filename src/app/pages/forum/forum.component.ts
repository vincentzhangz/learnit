import {Component, OnInit} from '@angular/core';
import {Course} from 'src/app/models/course';
import {ApiService} from 'src/app/services/api.service';
import {Forum} from 'src/app/models/forum';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.sass']
})
export class ForumComponent implements OnInit {
  forums: any;
  loggedIn = false;

  constructor(private api: ApiService) {
  }

  modal: any;
  courses: Course[];
  selectedCourse: Course = null;
  forum: Forum = new Forum();

  ngOnInit(): void {
    this.modal = document.getElementById('modal');
    this.forums = [
      {
        title: 'Title'
      }, {
        title: 'Title'
      }, {
        title: 'Title'
      }
    ];
    window.onclick = function(event) {
      if (event.target === this.modal) {
        this.modal.style.display = 'none';
      }
    };

    this.api.getAllCourses().subscribe(res => {
      this.courses = res;
    });

    if (this.api.getToken()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

  }

  postForum(): void {
    if (this.selectedCourse == null) {
      alert('Please select the course');
      return;
    }
    this.forum.course_id = this.selectedCourse.course_id;
    this.api.postForum(this.forum);
  }


}
