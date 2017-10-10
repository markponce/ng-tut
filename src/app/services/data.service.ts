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
export class DataService {

  constructor(private url: string, private http : Http) {
  }

  getAll() {
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.errorHandler);
    
  }

  create(resourse)
  {
    return this.http.post(this.url, JSON.stringify(resourse))
        .map(response => response.json())
        .catch(this.errorHandler);
  }

  update(resourse) {
    return this.http.patch(this.url + "/" + resourse.id, JSON.stringify({isRead : true}))
        .catch(this.errorHandler)
    
  }

  delete(id)
  {
    return this.http.delete(this.url + "/" + id)
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
