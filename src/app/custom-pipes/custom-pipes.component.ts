import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  // templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css'],
  template : `
    {{text | summary: 10:2}}
  `
})
export class CustomPipesComponent implements OnInit {
  text = 'asdknalkjsgfhlsdkjabfjksa ksd;jflsdahbfjlksadnbfjksldabf sdlfhljaskdhfldjksfnkl;mfdpiwebvywiantuxuywhhfalhfjhghkjjdiuhjhfskkjhdkmmlksjkdsj';
  constructor() { }

  ngOnInit() {
  }

}
