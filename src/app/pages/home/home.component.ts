import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  category: any = [];
  user: any;

  constructor(private  apiService: ApiService) {
    this.getCurrentUser();
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.category.push({
          title: `Category ${i}`,
          image: '../../../assets/img/deluxe.jpg'
        }
      );
    }
  }

  public getCurrentUser(): void {
    this.apiService.getCurrentUser().subscribe(res => this.saveUser(res));
  }

  saveUser(response): any {
    this.user = response;
    console.log(response);
  }
}
