import { CoursesService } from './../services/courses.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  // templateUrl: './courses.component.html',
  // styleUrls: ['./courses.component.css']
  template : `
    <h2>{{courses.length}} {{title}}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ul>
    <img [src]="imgUrl">
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    <button [style.backgroundColor]="true==true ? 'red' : 'blue'" class="btn btn-default" [class.active]="true" >Save</button>
    <div (click)="onDivClick($event)">
      <button (click)="onSave($event)" >Save</button>
    </div>
    <!--<input #email (keyup.enter)="onKeyUp(email.value)">-->
    <!--<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp2();">-->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp2()">
    
    
  `
})
export class CoursesComponent implements OnInit {
  title = 'List of Courses';
  courses;
  email = 'enter email';
  // imgUrl = 'https://source.unsplash.com/random';
  imgUrl = '';
  colSpan = 2;
  constructor(service: CoursesService) { 
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

  onKeyUp2() {
    // this.email = email;
    console.log(this.email);
  }

  onKeyUp(email)
  {
    // console.log('enter was pressed = ' + $event.target.value);
    console.log('enter was pressed = ' + email);
    
  }
  onDivClick($event) {
    $event.stopPropagation();
    
    console.log('on onDivClick');
  }

  onSave($event) {
    // console.log($event);
    console.log('button on save click');
  }



}
