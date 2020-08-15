import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {FormBuilder, Validators} from '@angular/forms';
import {UploadFileService} from '../../services/upload-file.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  user: User;
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  // loginForm = new FormGroup({
  //   name: new FormControl(""),
  //   email: new FormControl(""),
  //   password: new FormControl(""),
  //   gender: new FormControl(""),
  //   role: new FormControl(""),

  // })

  // for file upload example
  // uploader:FileUploader = this.fileService.createUploader("hehe");

  constructor(private fb: FormBuilder,
              private fileService: UploadFileService
  ) {
  }

  ngOnInit(): void {
  }

}
