import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-card-medium',
  templateUrl: './item-card-medium.component.html',
  styleUrls: ['./item-card-medium.component.sass']
})
export class ItemCardMediumComponent implements OnInit {
  @Input() course: any;

  constructor() {
  }

  ngOnInit(): void {
    this.course = {
      title: 'Test Title',
      description: 'Test Desc'
    };
  }

}
