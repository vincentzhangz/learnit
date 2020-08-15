import {ApiService} from './../../services/api.service';
import {Component, OnInit, resolveForwardRef} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {ActivatedRoute} from '@angular/router';
import {UploadFileService} from 'src/app/services/upload-file.service';
import {FileUploader} from 'ng2-file-upload';

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
  course: any = {
    user_id: '',
    category_id: '',
    course_title: '',
    max_enroll_student: 0,
    max_learning_day: 0,
    information : "",
    rating : 5,
    course_image : "lalala"
  }
  categories:any
  
  uploader: FileUploader = this.fileService.createUploader('localhost:4200/api/image/userimage');

  htmlContent = [];
  numbers: Array<number> = [1];
  courseid:string = ""
  constructor(private route: ActivatedRoute, private api:ApiService, private fileService: UploadFileService) {  
    this.route.params.subscribe(a => this.getId(a))
    
  }

  ngOnInit(): void {
    this.course.user_id = sessionStorage.getItem('userId');
    this.api.getAllCategory().subscribe(res => this.setCategory(res));
  }
  setCategory(res:any){
    this.categories = res;
    console.log(this.categories)
  }
  getId(a:any){
    console.log(a)
    if(a.id != null){
      this.courseid = <string>a.id
      console.log(a)
    }
    else{
      this.courseid = ""
    }
  }

  isEmpty(val: string) {
    return (val === null || val.length === 0 || val === undefined);
  }

  checkId() {
    return !this.isEmpty(this.courseid);
  }


  addNewModule(): void {
    this.numbers.push(this.numbers[this.numbers.length - 1] + 1);
  }

  saveModule(a: any) {
    console.log(a);
    console.log(this.htmlContent[a]);
  }

  removeModule(id: number): void {
    this.numbers = this.numbers.filter(e => e !== id);
  }

  createCourse(){
    console.log(this.course)
    if(this.course.user_id == "" || this.course.category_id == "" || this.course.max_enroll_student == 0 || this.course.max_learning_day == 0 || this.course.information == ""){
      alert("All Filed Must Be Filled!")
    }
    else{
      this.api.createCourse(this.course).subscribe(res => console.log(res));
    }
  }
}
