import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.sass']
})
export class ForumComponent implements OnInit {
  forum: any;

  constructor() {
  }

  ngOnInit(): void {
    this.forum = [
      {
        title: 'Title'
      }, {
        title: 'Title'
      }, {
        title: 'Title'
      }
    ];
  }

}
