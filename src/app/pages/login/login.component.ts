import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  user:User;

  constructor(private fb: FormBuilder) { }
  
  // loginForm = new FormGroup({
  //   name: new FormControl(""),
  //   email: new FormControl(""),
  //   password: new FormControl(""),
  //   gender: new FormControl(""),
  //   role: new FormControl(""),
    
  // })
  loginForm = this.fb.group({
    email:['',  Validators.required],
    password:['',  Validators.required],
  })

  ngOnInit(): void {
  }

}
