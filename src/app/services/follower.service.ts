import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable, ErrorHandler } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FollowerService {

  constructor(private http: Http) { }

  get() {
    return this.http.get('https://api.github.com/users/mosh-hamedani/followers')
    .map(response => response.json())
    .catch(this.errorHandler);
  }

  private errorHandler(error: Response){
    
        if(error.status === 400)
          return Observable.throw(new BadInput(error.json()));
    
        if(error.status === 404)
          return Observable.throw(new NotFoundError());
    
        return Observable.throw(new AppError());
      }
}
