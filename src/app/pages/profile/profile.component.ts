import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UploadFileService} from 'src/app/services/upload-file.service';
import {FileUploader} from 'ng2-file-upload';
import {User} from 'src/app/models/user';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private fb: FormBuilder,
              private fileService: UploadFileService,
              private apiService: ApiService
  ) {
  }

  updateForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    gender: ['', Validators.required],
    role: ['', Validators.required],
  });
  uploader: FileUploader = this.fileService.createUploader('localhost:4200/api/image/userimage');

  ngOnInit(): void {
    this.updateForm.controls[`email`].setValue(this.user.user_email);
    this.updateForm.controls[`name`].setValue(this.user.user_name);
    this.updateForm.controls[`gender`].setValue(this.user.user_gender);
    this.updateForm.controls[`role`].setValue(this.user.user_role);
    
    console.log(this.updateForm[`email`]);
  }

  save(): void {
  }

}
