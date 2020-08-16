import {ApiService} from './../../services/api.service';
import {Component, OnInit} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {ActivatedRoute} from '@angular/router';
import {UploadFileService} from 'src/app/services/upload-file.service';
import {FileUploader} from 'ng2-file-upload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.sass']
})
export class CreateCourseComponent implements OnInit {
  public Editor = ClassicEditor;

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
    information: '',
    rating: 5,
    course_image: 'lalala'
  };
  categories: any;

  uploader: FileUploader = this.fileService.createUploader('localhost:4200/api/image/userimage');

  moduleContent = [];
  numbers: Array<number> = [1];
  courseid = '';

  constructor(private route: ActivatedRoute, private api: ApiService, private fileService: UploadFileService) {
    this.route.params.subscribe(a => this.getId(a));
  }

  ngOnInit(): void {
    this.course.user_id = sessionStorage.getItem('userId');
    this.api.getAllCategory().subscribe(res => this.setCategory(res));
  }

  setCategory(res: any): any {
    this.categories = res;
  }

  getId(a: any): any {
    if (a.course_id != null) {
      console.log("here")
      this.courseid = <string> a.course_id;
      this.api.getCourseById(this.courseid).subscribe(res => this.getCourse(res))
    } else {
      this.courseid = '';
    }
  }
  getCourse(course:any):any{
    // console.log(course)
    this.course=course
    this.course.category_id = course.course_category.category_id;
    this.getMaterials(course.detail)
    console.log(this.course)
  }
  getMaterials(res : any){
    console.log("here")
    console.log(res)
    for(let x = 0; x < res.length ; x++){
      this.moduleContent.push({
        course_id: this.courseid,
        material_id: res[x].material_id,
        course_title: res[x].course_title,
        course_content: res[x].course_content
      })
    }
  }

  isEmpty(val: string): any {
    return (val === null || val.length === 0 || val === undefined);
  }

  checkId(): any {
    return !this.isEmpty(this.courseid);
  }

  addNewModule(): void {
    if(!this.courseid)return;
    this.moduleContent.push({
      course_id: this.courseid,
      material_id: '',
      course_title: '',
      course_content: ''
    });
  }

  removeModule(id: number): void {
    let mod = this.moduleContent[id]
    if(mod.material_id != ""){
      this.api.deleteCourseMaterial(mod.material_id).subscribe(res => console.log(res))
    }
    this.moduleContent.splice(id, 1);

  }

  getIndex(index: number): number {
    return index + 1;
  }

  createCourse(): any {
    if (this.course.user_id === '' || this.course.category_id === '' || this.course.max_enroll_student === 0 || this.course.max_learning_day === 0 || this.course.information == '') {
      alert('All Filed Must Be Filled!');
    } else {
      this.api.createCourse(this.course).subscribe(res => this.saveCourse(res));
    }
  }

  updateCourse():any{
    if (this.course.user_id === '' || this.course.category_id === '' || this.course.max_enroll_student === 0 || this.course.max_learning_day === 0 || this.course.information == '') {
      alert('All Filed Must Be Filled!');
    }
    else{
      // this.api.updateCourse(this.course).subscribe(res => console.log(res));
      for(let z = 0; z<this.moduleContent.length; z++){
        let mod = this.moduleContent[z];
        if(mod.course_title != "" && mod.course_content != ""){
          if(mod.material_id == ""){
            this.api.insertCourseMaterial(mod).subscribe(res => console.log(res))
          }
          else{
            console.log(mod)
            this.api.updateCourseMaterial(mod).subscribe(res => console.log(res))
          }
        }
      }
    }
  }

  saveCourse(response): any {
    this.courseid = response;
  }
}
