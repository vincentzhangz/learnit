import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {Course} from 'src/app/models/course';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {

  courses: Course[];
  id:string = null
  constructor(private api: ApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
                
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.id=="" || this.id==null){
      this.api.getAllCourses().subscribe(res => {
        
        this.courses = res;
        console.log(this.courses);
      });
    }else{
      console.log("gatcha")
      this.api.getCoursesByCategoryId(this.id).subscribe(res=>{
        this.courses = res;
        console.log(this.courses);
      })
    }
  }
  goToCourseDetail(id: string) {
    this.router.navigateByUrl('course/' + id);
  }

  
}
