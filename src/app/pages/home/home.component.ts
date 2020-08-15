import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  category: any = [];
  user: User;
  course: any;

  constructor(private  apiService: ApiService) {
  }


  ngOnInit(): void {
    if (sessionStorage.getItem('userId')) {
      this.getCurrentUser();
    }

    this.apiService.getTopCourse().subscribe(res => this.saveCourses(res));

  }

  public getCurrentUser(): void {
    this.apiService.getCurrentUser().subscribe(res => this.saveUser(res));
  }

  saveUser(response): any {
    this.user = response;
  }

  saveCourses(response): any {
    this.course = response;
  }
}
