import { ApiService } from './../../services/api.service';
import {Component, OnInit} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import { ActivatedRoute } from '@angular/router';
import { isNull } from '@angular/compiler/src/output/output_ast';

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
  course:any = {
    user_id: "",
    category_id: "",
    course_title: "",
    max_enroll_student: 0,
    max_learning_day: 0,
    information : ""
  }

  htmlContent = [];
  numbers: Array<number> = [1];
  courseid:string = ""
  constructor(private route: ActivatedRoute, private api:ApiService) {  
    this.route.params.subscribe(a => this.getId(a))
  }
  getId(a:any){
    if(a.id != null){
      this.courseid = <string>a.id
      console.log(a)
    }
    else{
      this.courseid = ""
    }
  }
  isEmpty(val:string){
    return (val === null || val.length === 0 || val === undefined);
  }
  checkId(){
    return !this.isEmpty(this.courseid)
  }
  ngOnInit(): void {
    this.course.user_id = sessionStorage.getItem('userId');
  }

  addNewModule(): void {
    this.numbers.push(this.numbers.length + 1);

    console.log(this.numbers)
  }
  saveModule(a:any){
    console.log(a)
    console.log(this.htmlContent[a])
  }
  removeModule(id: number): void {
    this.numbers = this.numbers.filter(e => e !== id);
  }

  createCourse(){
    console.log(this.course)
  }
}
