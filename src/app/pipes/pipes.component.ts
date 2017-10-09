import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  // templateUrl: './pipes.component.html',
  template : `
    {{course.title | uppercase}} <br>
    {{course.students | number}}<br>
    {{course.rating | number:'1.2-2'}}<br>
    {{course.price | currency:'php':true:'1.2-2'}}<br>
    {{course.releaseDate| date:'shortDate'}}<br>
    
  `,
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {


  course = {
    title : "The complete Anuglar Course",
    rating : 4.9745,
    students : 30123,
    price : 190.95,
    releaseDate : new Date(2016, 3, 1)
  };
  constructor() { }

  ngOnInit() {
  }

}
