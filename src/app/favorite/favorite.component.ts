import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  // templateUrl: './favorite.component.html',glyphicon-star 
  styleUrls: ['./favorite.component.css'],
  template : `
    <span class="glyphicon" (click)="onClick()" [(ngModel)]="isSelected" [ngClass]="(!isSelected) ? ' glyphicon-star-empty' : 'glyphicon-star'" ngDefaultControl></span>
    
  `
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isSelected : boolean;
  @Output('change') change = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }

  onClick() {
    this.isSelected = !this.isSelected;
    // console.log(this.isSelected);
    // let val = new FavoriteChangedEventArgs();
    this.change.emit({newValue : this.isSelected});
    // this.isSelected = !this.isSelected ? true : false;
  }




}

export interface FavoriteChangedEventArgs {
  newValue : boolean
}