import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.sass']
})
export class CreateCourseComponent implements OnInit {

  constructor() { }
  numbers:Array<number> = [1]

  ngOnInit(): void {
  }

  addNewModule(){
    this.numbers.push(this.numbers.length+1)
  }

  removeModule(id:number){
    this.numbers = this.numbers.filter(function (e) {
      return e!= id
    })
  }
}
