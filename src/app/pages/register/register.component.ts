import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  user:User;
  constructor(private fb: FormBuilder) { }
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email:['',  Validators.required],
    password:['',  Validators.required],
    gender:['',  Validators.required],
    role:['', Validators.required],
  })

  ngOnInit(): void {
  }
  // bambang:any;
  test():void{
    this.user = this.registerForm.value;
  }
}
