import {Component, Input, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {UploadFileService} from '../../services/upload-file.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.sass']
})
export class CourseDetailComponent implements OnInit {
  @Input() course: any;
  @Input() assignment: any;
  uploadedFile: any;
  uploader: FileUploader = this.fileService.createUploader('localhost:4200/api/test');

  constructor(private fileService: UploadFileService) {
  }

  ngOnInit(): void {
    this.course = {
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


  }

  doUpload(idTitle: string): void {
    document.getElementById(idTitle).click();
  }
}
