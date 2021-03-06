import {Component, Input, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {UploadFileService} from '../../services/upload-file.service';
import {ApiService} from 'src/app/services/api.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from 'src/app/models/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.sass']
})
export class CourseDetailComponent implements OnInit {
  @Input() courses: any;
  @Input() assignment: any;
  uploadedFile: any;
  uploader: FileUploader = this.fileService.createUploader('localhost:4200/api/test');
  course: Course;
  id: string;
  loggedIn: boolean;
  enrolled: boolean;

  constructor(private fileService: UploadFileService,
              private api: ApiService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    if (this.api.getToken()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    this.api.getEnrolledCourses(sessionStorage.getItem('userId')).subscribe(res => this.checkEnrolled(res));

    this.courses = {
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
    this.uploadedFile = [{
      title: '',
    }, {
      title: '',
    }
    ];
    this.id = this.activatedRoute.snapshot.paramMap.get('id').toString();
    this.api.getCourseById(this.id).subscribe(res => {
      this.saveCourse(res);
    });
  }

  checkEnrolled(response): void {
    let count = response.listCourse.length;
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push(response.listCourse[i][0].course_id);
    }
    if (data.indexOf(this.id) !== -1) {
      this.enrolled = false;
    } else {
      this.enrolled = true;
    }


  }

  saveCourse(response): void {
    this.course = response;
  }

  doUpload(idTitle: string): void {
    document.getElementById(idTitle).click();
  }

  enroll(): void {
    let data = {
      user_id: sessionStorage.getItem('userId'),
      course_id: this.id
    };
    this.api.enrollCourse(data).subscribe(res => this.success(res));
  }

  success(res): void {
    if (!res.error) {
      alert('Success enroll');
    } else {
      alert('Failed to enroll');
    }
    window.location.reload();
  }
}
