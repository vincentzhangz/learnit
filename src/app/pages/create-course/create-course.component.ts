import {Component, OnInit} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.sass']
})
export class CreateCourseComponent implements OnInit {

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    sanitize: true
  };
  information: string;
  htmlContent = [];
  numbers: Array<number> = [1];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewModule(): void {
    this.numbers.push(this.numbers.length + 1);
  }

  removeModule(id: number): void {
    this.numbers = this.numbers.filter(e => e !== id);
  }
}
