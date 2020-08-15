import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UploadFileService} from 'src/app/services/upload-file.service';
import {FileUploader} from 'ng2-file-upload';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user: User;

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
  uploader: FileUploader = this.fileService.createUploader('localhost:4200/api/image/userimage');

  ngOnInit(): void {
    this.user = {
      email: '',
      gender: '',
      name: '',
      password: '',
      role: ''
    };
    this.updateForm.controls[`email`].setValue(this.user.email);
    this.updateForm.controls[`name`].setValue(this.user.name);
    this.updateForm.controls[`gender`].setValue(this.user.gender);
    this.updateForm.controls[`password`].setValue(this.user.password);
    this.updateForm.controls[`email`].setValue(this.user.email);
    console.log(this.updateForm[`email`]);
  }

  save(): void {
  }

}
