import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card-category',
  templateUrl: './item-card-category.component.html',
  styleUrls: ['./item-card-category.component.sass']
})
export class ItemCardCategoryComponent implements OnInit {
  @Input() category: any;

  constructor(
    private router:Router
  ) {
  }

  ngOnInit(): void {
    // this.category = {
    //   title: 'Coding',
    //   image: '../../../assets/img/deluxe.jpg'
    // };
  }
  goToCourseByCategory(categoryId:string){
    this.router.navigateByUrl("course/category/"+categoryId);
  }

}
