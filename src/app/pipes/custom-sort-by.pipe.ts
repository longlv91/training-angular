import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSortBy'
})
export class CustomSortByPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    return value.sort(this.dynamicSort(args[0]));
  }

  dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return (a, b)  => {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

}
