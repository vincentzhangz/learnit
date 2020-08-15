import {Component, OnInit} from '@angular/core';
import { Course } from 'src/app/models/course';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.sass']
})
export class ForumComponent implements OnInit {
  forum: any;

  constructor(private api:ApiService) {
  }
  modal:any
  courses:Course[]
  selectedCourse:Course = null
  ngOnInit(): void {
    this.modal = document.getElementById("modal")
    this.forum = [
      {
        title: 'Title'
      }, {
        title: 'Title'
      }, {
        title: 'Title'
      }
    ];
    window.onclick = function(event) {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    }
    this.api.getAllCourses().subscribe(res =>{
      this.courses = res
    })
  }

  

}
