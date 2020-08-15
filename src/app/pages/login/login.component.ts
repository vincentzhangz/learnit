import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {FormBuilder, Validators} from '@angular/forms';
import {UploadFileService} from '../../services/upload-file.service';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

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
              private fileService: UploadFileService,
              private apiService: ApiService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.user = this.loginForm.value;
    this.apiService.login(this.user).subscribe(res => this.success(res));
  }

  success(response): void {
    sessionStorage.setItem('userId', response.user_id);
    sessionStorage.setItem('token', response.token);
    window.location.reload();
    // this.router.navigate(['/']);
  }


}
