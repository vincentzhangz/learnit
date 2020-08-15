import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  category: any = [];

  constructor() {
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
}
