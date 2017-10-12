import { FollowerService } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: any[];

  constructor(private service: FollowerService) { }
  ngOnInit() {
    this.service.get().subscribe(response => {
      this.followers = response;
    });

    console.log(this.followers);
  }

}
