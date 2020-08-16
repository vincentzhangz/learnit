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
  updateForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    gender: ['', Validators.required],
    role: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private fileService: UploadFileService,
              private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
    this.apiService.getCurrentUser().subscribe(res => this.setData(res));
  }

  save(): void {
  }
  image:any
  setData(response): void {
    this.user = response;
    this.updateForm.controls[`email`].setValue(this.user.user_email);
    this.updateForm.controls[`name`].setValue(this.user.user_name);
    this.updateForm.controls[`gender`].setValue(this.user.user_gender);
  }
  uploadImage(a:any):void{
    console.log("here")
    
    let reader= new FileReader()

    reader.onload = (res:any) => {
      this.image = res.target.result
    }
    reader.readAsDataURL(a.files[0]);

  }

}
