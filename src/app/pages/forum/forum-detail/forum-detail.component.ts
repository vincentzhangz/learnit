import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.sass']
})
export class ForumDetailComponent implements OnInit {
  replyForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {

  }

  toReply() {
    document.getElementById('reply').scrollIntoView();
  }

}
