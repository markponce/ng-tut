import {DataService} from './data.service';
// import { BadInput } from './../common/bad-input';
// import { NotFoundError } from './../common/not-found-error';
// import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable, ErrorHandler } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';


@Injectable()
export class PostService extends DataService{

  // private url: string = 'https://jsonplaceholder.typicode.com/posts';  
  constructor(http : Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);

  }



}
