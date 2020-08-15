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

  constructor(private fileService: UploadFileService,
              private api: ApiService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
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
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCourseById(this.id).subscribe(res => {
      this.course = res;
      console.log(this.course);
    });

  }

  doUpload(idTitle: string): void {
    document.getElementById(idTitle).click();
  }
}
