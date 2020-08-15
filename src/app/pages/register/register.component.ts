import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from 'src/app/models/user';
import {ApiService} from '../../services/api.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  user: User;
  registerForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    repassword: ['', Validators.required],
    gender: ['', Validators.required],
    role: ['', Validators.required],
  });

  headers = new HttpHeaders().set('Beare', 'custom header value');

  constructor(private fb: FormBuilder, private  apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  register(): void {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiService.getToken()}`
    });
    this.user = this.registerForm.value;
    this.apiService.register(this.user).subscribe(res => this.success(res));
  }

  success(response): void {
  }


}
