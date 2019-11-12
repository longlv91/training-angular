import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseText'
})
export class ReverseTextPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value) {
      return value.split('').reverse().join('');
    }
    return null;
  }

}
