import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('is-liked') isSelected: boolean;
  @Input('likes-count') likesCount : number;
  @Output('change') change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    if(this.isSelected) {
      this.likesCount++;
    } else {
      this.likesCount--;
    }

    this.change.emit({isSelected : this.isSelected, likesCount : this.likesCount});
  }
}




