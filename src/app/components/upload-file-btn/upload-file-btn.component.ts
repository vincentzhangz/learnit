import { Component, OnInit } from '@angular/core';
import {FileUploader} from "ng2-file-upload";
@Component({
  selector: 'app-upload-file-btn',
  templateUrl: './upload-file-btn.component.html',
  styleUrls: ['./upload-file-btn.component.sass']
})


// const URL = ; // To API Upload
export class UploadFileBtnComponent implements OnInit {

  
  constructor() { }
  uploader: FileUploader = new FileUploader({url: "http://localhost:3000/api/upload"});
  
  ngOnInit(): void {
    this.uploader.onCompleteItem = (file: any, response: any, status: any) => {
      console.log('FileUpload:uploaded:', file, status, response);
      alert('File uploaded successfully');
    }
    
  }

}
