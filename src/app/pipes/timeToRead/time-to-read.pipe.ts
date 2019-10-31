import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToRead'
})
export class TimeToReadPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (value) {
      let min = value / 5;
      return `${min} min read`;

    } else {
      return null;
    }

  }

}
