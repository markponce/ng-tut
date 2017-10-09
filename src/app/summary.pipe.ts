import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number, start? : number): any {
    // return value;
    if(!value) 
      return null;

      let actualLimit = (limit) ? limit : 50;
      let actualStart = (start) ? start : 0;
      return value.substr(actualStart, actualLimit) + '...';

  }

}
