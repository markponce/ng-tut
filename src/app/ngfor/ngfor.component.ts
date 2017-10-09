import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {


  courses = [
    {id : 1, name: "course 1"},
    {id : 2, name: "course 2"},
    {id : 3, name: "course 3"},
  ]
  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    // alert(123);
    this.courses.push({id : 4, name: "course 4"});
  }

  onRemove(course) {
    // course.name = "UPDATED";
    // console.log(course);
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
    console.log(index);
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }



}
