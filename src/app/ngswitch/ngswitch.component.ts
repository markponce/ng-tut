import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {


  viewMode = 'map';
  constructor() { }

  ngOnInit() {
  }

}
