import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-card-category',
  templateUrl: './item-card-category.component.html',
  styleUrls: ['./item-card-category.component.sass']
})
export class ItemCardCategoryComponent implements OnInit {
  @Input() category: any;

  constructor() {
  }

  ngOnInit(): void {
    // this.category = {
    //   title: 'Coding',
    //   image: '../../../assets/img/deluxe.jpg'
    // };
  }

}
