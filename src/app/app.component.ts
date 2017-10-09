import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from 'app/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    title : 'Title',
    isFavorite : false
  }

  // color : #ccc ;deeppink
  tweet = {
      body : 'Body of the Tweet',
      isLiked : false,
      likesCount : 0
  }
  
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Fav changed: ', eventArgs);
    // console.log();
  }

  onLikeChanged($event) {
    console.log('onLikeChanged: ', $event);    
  }
}
