import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadFileService } from 'src/app/services/upload-file.service';
import {FileUploader} from "ng2-file-upload";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(private fb: FormBuilder,
      private fileService: UploadFileService
    ) {
  }
  updateForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    gender: ['', Validators.required],
    role: ['', Validators.required],
  });

  uploader:FileUploader = this.fileService.createUploader("localhost:4200/api/image/userimage");

  ngOnInit(): void {
  }

  test(){

  }

}
