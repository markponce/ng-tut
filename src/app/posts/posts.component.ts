import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  constructor(private services: PostService) { 

  }

  ngOnInit() {

    this.services.getAll()
      .subscribe(response => this.posts = response);
  }
  
  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    this.services.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          input.value = '';
          this.posts.splice(0,0,post);
        },
        (error: AppError) => {
          if(error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
            alert('error.status === 400');
            console.log('error.originalError:', error.originalError);
          } else {
            throw error;
          }

      });
  }

  updatePost(post) {
    // console.log(post);
    this.services.update(post)    
      .subscribe(
        updatedPost => {
        console.log('updatedPost', updatedPost);
      });
  }

  deletePost(post) {
    this.services.delete(231242134)        
    .subscribe(
      () => {
        // console.log(response.json());
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
        // console.log
    }, 
      (error: AppError) => {
        if(error instanceof NotFoundError)
          alert('This post has aldeady been deleted.');
        else {
          throw error;
        }
        
        
    });
    
  }

  
}
